import React, { useState } from 'react';
import {
  Typography,
  createStyles,
  makeStyles,
  Theme,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
} from '@material-ui/core';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import bubble from '../assets/bubble.svg';
import openQ from '../assets/open-q.svg';
import closeQ from '../assets/close-q.svg';
import { toggleModal, handleAuthModal } from '../redux/actions/common';
import { IReview } from '../interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      background: 'transparent',
      borderWidth: 0,
      outline: 0,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    active: {
      cursor: 'pointer',
    },
    topSectionContainer: {
      display: 'flex',
      width: '100%',
    },
    chatIconContainer: {
      background: 'rgba(67, 206, 162, .05)',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '2.75rem',
      width: '2.75rem',
    },
    ratingBoxContainer: {
      marginLeft: 'auto',
    },
    textContainer: {
      alignSelf: 'center',
      marginTop: '1rem',
      marginBottom: '2rem',
      padding: '0 1.75rem',
    },
    text: {
      fontSize: '1rem',
      color: '#A9A9A9',
      position: 'relative',
      '&::before': {
        content: `url(${openQ})`,
        position: 'absolute',
        top: '-20px',
        left: '-20px',
      },
      '&::after': {
        content: `url(${closeQ})`,
        position: 'absolute',
        bottom: '-20px',
        right: '-20px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
    },
    textNoRating: {
      marginTop: '5rem',
      marginBottom: '7rem',
      fontSize: '1.5rem',
    },
    dialogBtn: {
      minWidth: '64px',
    },
    dialogContent: {
      marginTop: '.5rem',
    },
    dialogActions: {
      paddingRight: '1.25rem',
    },
    wrapper: {
      background: '#F8FBFC',
      borderRadius: '.2rem',
      padding: '1rem',
      width: '25rem',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    }
  })
);

interface Props {
  value?: IReview;
  canPost?: boolean;
  jobId?: string;
  isCustomer?: boolean;
}

function PendingReviewDialog({ open, onClose }) {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent className={classes.dialogContent}>
        <DialogContentText>
          <Typography paragraph variant='body2'>
            You will be able to post a review once the job has been completed.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button
          onClick={onClose}
          color='primary'
          variant='text'
          className={classes.dialogBtn}
          autoFocus
        >
          GOT IT
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const Review: React.FC<Props> = (props) => {
  const { canPost, isCustomer, value } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const handleClick = () => {
    if (!isCustomer) return;
    if (!canPost && !value) return setDialogIsOpen(true);
    if (canPost && !value) {
      dispatch(toggleModal('review'));
      dispatch(handleAuthModal(true));
    }
  };

  const handleDialogClose = () => {
    setDialogIsOpen(false);
  };

  return (
    <>
      <PendingReviewDialog open={dialogIsOpen} onClose={handleDialogClose} />
      <button
        onClick={handleClick}
        className={clsx([
          classes.container,
          props.isCustomer && !props.value && classes.active,
        ])}
      >
        <div className={classes.wrapper}>
          <div className={classes.topSectionContainer}>
            <div className={classes.chatIconContainer}>
              <img src={bubble} alt='bubble' />
            </div>
            {value && (
              <Box
                component='fieldset'
                mb={2}
                borderColor='transparent'
                className={classes.ratingBoxContainer}
                display='flex'
              >
                <Rating
                  size='large'
                  emptyIcon={<StarBorderIcon fontSize='inherit' />}
                  value={value.rating}
                  readOnly
                />
              </Box>
            )}
          </div>
          <div className={classes.textContainer}>
            <Typography
              variant='body2'
              className={clsx([classes.text, !value && classes.textNoRating])}
            >
              <span>
                {value
                  ? value.comment
                  : canPost && isCustomer
                  ? 'Click here to write a review'
                  : 'No review yet'}
              </span>
            </Typography>
          </div>
        </div>
      </button>
    </>
  );
};

export default Review;
