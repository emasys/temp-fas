import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { EditRounded } from '@material-ui/icons';
import ReactCrop from 'react-image-crop';
import { AppState } from '../lib/initialState';
import UserInfoForm from './UserInfoForm';
import { cloudinaryUpload } from '../api';
import { updateUser } from '../redux/actions/auth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '3rem',
      [theme.breakpoints.down('sm')]: {
        padding: '1rem',
      },
    },
    imageWrapper: {
      borderRadius: '50%',
      background: 'rgba(255, 133, 21, 0.1)',
      width: '13rem',
      position: 'relative',
      height: '13rem',
      marginBottom: '1rem',
    },
    cropWrapper: {
      background: '#fff',
      zIndex: 20,
      width: '100%',
      position: 'relative',
      height: '13rem',
      marginBottom: '1rem',
    },
    cropBtn: {
      minHeight: '1.8rem',
      // position: 'absolute',
      // left: 0,
      // bottom: '-2.75rem',
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '1.5rem',
      },
    },
    edit: {
      position: 'absolute',
      background: '#FF8515',
      padding: '.5rem',
      bottom: '.5rem',
      right: '1rem',
      '&:hover': {
        background: '#FF8514',
      },
    },
    editIcon: {
      color: '#fff',
      fontSize: '1rem',
    },
    input: {
      display: 'none',
    },
  })
);

const cropConfig = {
  x: 10,
  y: 10,
  width: 200,
  unit: 'px',
  maxWidth: 210,
  aspect: 1 / 1,
};

const pixelRatio = 4;

function getResizedCanvas(canvas, newWidth, newHeight) {
  const tmpCanvas = document.createElement('canvas');
  tmpCanvas.width = newWidth;
  tmpCanvas.height = newHeight;

  const ctx = tmpCanvas.getContext('2d');
  ctx.drawImage(
    canvas,
    0,
    0,
    canvas.width,
    canvas.height,
    0,
    0,
    newWidth,
    newHeight
  );

  return tmpCanvas;
}

function generateImage(previewCanvas, crop) {
  if (!crop || !previewCanvas) {
    return;
  }
  const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);
  return canvas.toDataURL();
}

interface Props {}
const UserInfo: React.FC<Props> = (props) => {
  const classes = useStyles();
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [upImg, setUpImg] = useState<any>();
  const [loading, setLoading] = useState(false);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState<any>(cropConfig);
  const [completedCrop, setCompletedCrop] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }
    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  const handleUpload = async () => {
    setLoading(true);
    const croppedImage = generateImage(previewCanvasRef.current, completedCrop);
    const data = await cloudinaryUpload({ profileImage: croppedImage });
    dispatch(updateUser(data));
    setLoading(false);
    handleClose();
  };

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      setOpen(true);
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} lg={3} className={classes.imageContainer}>
        <div
          className={classes.imageWrapper}
          style={{
            backgroundImage: `url(${user.profileImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle id='alert-dialog-title'>
                <Typography variant="body2">
                  Crop and save image
                </Typography>
              </DialogTitle>
              <DialogContent>
                <ReactCrop
                  src={upImg}
                  crop={crop}
                  onImageLoaded={onLoad}
                  onChange={(c) => setCrop(c)}
                  onComplete={(c) => setCompletedCrop(c)}
                />
                <div style={{ display: 'none' }}>
                  <canvas
                    ref={previewCanvasRef}
                    style={{
                      width: completedCrop?.width ?? 0,
                      height: completedCrop?.height ?? 0,
                    }}
                  />
                </div>
              </DialogContent>
              <DialogActions>
                <Button
                  variant='contained'
                  className={classes.cropBtn}
                  fullWidth
                  disabled={
                    !completedCrop?.width || !completedCrop?.height || loading
                  }
                  onClick={handleUpload}
                >
                  {loading ? 'Uploading...' : 'Save'}
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <input
            accept='image/*'
            value=""
            className={classes.input}
            id='dp-upload'
            onChange={onSelectFile}
            type='file'
          />
          <label htmlFor='dp-upload'>
            <IconButton
              className={classes.edit}
              aria-label='upload picture'
              component='span'
            >
              <EditRounded className={classes.editIcon} />
            </IconButton>
          </label>
        </div>
        <Typography variant='body2'>{user.fullName}</Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <div>
          <UserInfoForm />
        </div>
      </Grid>
    </Grid>
  );
};

export default UserInfo;
