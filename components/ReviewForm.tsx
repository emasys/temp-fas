import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../lib/initialState";
import { handleAuthModal } from "../redux/actions/common";
import { postJobRating } from "../api";
import { updateJobReview } from "../redux/actions/jobs";
import RatingBox from "../components/RatingBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      width: "27rem",
      backgroundColor: "#fff",
      top: "20%",
      left: 0,
      borderRadius: ".2rem",
      right: 0,
      margin: "auto",
      outline: "none",
      maxHeight: "95vh",
      overflow: "auto",
      [theme.breakpoints.down("xs")]: {
        width: "95%",
        top: "2%",
      },
    },
    form: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: "1rem 2rem 2rem",
      borderRadius: ".2rem",
      backgroundColor: "#fff",
      [theme.breakpoints.down("xs")]: {
        padding: "3rem 1rem",
      },
    },
    button: {
      borderRadius: "2rem",
    },
    inputBox: {
      marginBottom: "2rem",
    },
    descriptionInputRoot: {
      backgroundColor: "#fff !important",
    },
    title: {
      fontSize: "1.75rem",
      color: "#636363",
      textAlign: "center",
      margin: "1rem 0rem",
      fontWeight: "normal",
    },
    ratingContainer: {
      paddingLeft: 0,
      marginLeft: "auto",
      marginRight: "auto",
      width: "fit-content",
    },
    ratingSizeLarge: {
      fontSize: "2.5rem",
    },
  })
);

let validationSchema = Yup.object().shape({
  comment: Yup.string().trim().max(500),
  rating: Yup.number().max(5).min(1).required(),
});

interface Props {}

const JobReviewForm: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const job = useSelector((state: AppState) => state.common.drawerContent);
  const {
    values,
    isValid,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
    setSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: { comment: "", rating: 0, error: "" },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async (values, { setSubmitting }) => {
      const { error, ...payload } = values;
      const data = await postJobRating(payload, job.id);
      setSubmitting(true);
      if (!data) {
        return setSubmitting(false);
      }
      dispatch(updateJobReview(data));
      dispatch(handleAuthModal(false));
      setSubmitting(false);
    },
  });

  useEffect(() => {
    setSubmitting(false);
  }, [open]);

  return (
    <div className={classes.paper}>
      <div className={classes.form}>
        <Typography variant="body1" className={classes.title}>
          Rate this service
        </Typography>
        <RatingBox
          value={values.rating}
          onChange={(value: number) => setFieldValue("rating", value)}
          classname={classes.ratingContainer}
        />
        <TextField
          InputProps={{ classes: { root: classes.descriptionInputRoot } }}
          variant="outlined"
          onChange={handleChange}
          value={values.comment}
          onBlur={handleBlur}
          className={classes.inputBox}
          name="comment"
          multiline
          rows={4}
          rowsMax={8}
          id="comment"
          label="Comment"
          helperText="Max. 500 chars"
        />
        <Button
          onClick={() => handleSubmit()}
          className={classes.button}
          disabled={isSubmitting || !isValid}
          variant="contained"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default JobReviewForm;
