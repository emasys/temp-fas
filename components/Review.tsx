import React, { useState } from "react";
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
} from "@material-ui/core";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import bubble from "../assets/bubble.svg";
import openQ from "../assets/open-q.svg";
import closeQ from "../assets/close-q.svg";
import { toggleModal, handleAuthModal } from "../redux/actions/common";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "3.1875rem 2.5rem",
      background: "#F8FBFC",
      height: "20rem",
      borderRadius: ".2rem",
      width: "25rem",
      borderWidth: 0,
      outline: 0,
      [theme.breakpoints.down("sm")]: {},
    },
    active: {
      cursor: "pointer",
    },
    chat: {
      background: "rgba(67, 206, 162, .05)",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "2.75rem",
      width: "2.75rem",
    },
    text: {
      fontSize: "1.5rem",
      color: "#A9A9A9",
      display: "flex",
      alignSelf: "center",
      marginTop: "1rem",
      "&::before": {
        content: `url(${openQ})`,
        display: "block",
        height: 60,
        marginTop: -27,
        marginRight: "1rem",
      },
      "&::after": {
        content: `url(${closeQ})`,
        display: "block",
        height: 60,
        marginTop: 35,
        marginLeft: "1rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
    textNoRating: {
      marginTop: "3rem",
    },
    dialogBtn: {
      minWidth: "64px",
    },
    dialogContent: {
      marginTop: ".5rem",
    },
    dialogActions: {
      paddingRight: "1.25rem",
    },
    ratingBoxContainer: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  })
);

interface Props {
  value?: any;
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
          <Typography paragraph variant="body2">
            You will be able to post a review once the job has been completed.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button
          onClick={onClose}
          color="primary"
          variant="text"
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
      dispatch(toggleModal("review"));
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
        <div>
          <div className={classes.chat}>
            <img src={bubble} alt="bubble" />
          </div>
        </div>
        {value && (
          <Box
            component="fieldset"
            mb={2}
            borderColor="transparent"
            className={classes.ratingBoxContainer}
            display="flex"
          >
            <Rating
              size="large"
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              value={value.rating}
              readOnly
            />
          </Box>
        )}
        <Typography
          variant="body2"
          className={clsx([classes.text, !value && classes.textNoRating])}
        >
          {!value ? "No review yet" : value.comment}
        </Typography>
      </button>
    </>
  );
};

export default Review;
