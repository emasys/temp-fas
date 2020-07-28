import Rating from "@material-ui/lab/Rating";
import { createStyles, makeStyles, Theme, Box } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

export default function RatingBox({
  value,
  onChange,
  classname
}: {
  value: any;
  onChange?: any;
  classname?: any 
}) {
  const classes = useStyles();
  return (
    <Box
      component="fieldset"
      mb={2}
      borderColor="transparent"
      className={classname}
      display="flex"
    >
      <Rating
        size="large"
        classes={{ sizeLarge: classes.ratingSizeLarge }}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
        value={value}
        readOnly={!onChange}
        onChange={(_event, newValue) => {
          onChange && onChange(newValue);
        }}
      />
    </Box>
  );
}
