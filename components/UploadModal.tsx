import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import ReactCrop from 'react-image-crop';
import { CloseRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cropBtn: {
      minHeight: '1.8rem',
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '1.5rem',
      },
    },
    root: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 10px 16px 24px',
    },
    closeButton: {
      background: '#fff',
      padding: '.2rem',
    },
    actions: {
      padding: '16px 24px',
    },
  }),
);

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
    newHeight,
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

interface Props {
  upImg: string;
  open: boolean;
  setStatus: (status: boolean) => void;
  cropConfig: any;
  uploadAPI: (...arg: any[]) => any;
}

interface DialogTitleProps {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = (props: DialogTitleProps) => {
  const classes = useStyles();
  const { children, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseRounded />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const UploadModal: React.FC<Props> = (props) => {
  const { upImg, uploadAPI, open, cropConfig, setStatus } = props;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState<any>(cropConfig);
  const [completedCrop, setCompletedCrop] = useState(null);

  const handleClose = () => {
    setStatus(false);
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
      crop.height,
    );
  }, [completedCrop]);

  const handleUpload = async () => {
    setLoading(true);
    const croppedImage = generateImage(previewCanvasRef.current, completedCrop);
    const data = await uploadAPI(croppedImage);
    setLoading(false);
    setCrop(cropConfig);
    handleClose();
    return data;
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" onClose={handleClose}>
          Crop and save image
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
        <DialogActions className={classes.actions}>
          <Button
            variant="contained"
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
  );
};

export default UploadModal;
