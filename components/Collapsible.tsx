import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    title: {
      color: '#292929',
      fontSize: '.7rem',
      marginBottom: '.5rem',
      letterSpacing: '.1rem',
    },
    heading: {
      color: '#292929',
      letterSpacing: '.1rem',
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    paper: {
      boxShadow: 'none',
    },
    summary: {
      padding: 0,
    },
  })
);

interface Props {
  title: string;
  body: string;
}
const Collapsible: React.FC<Props> = ({ title, body }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion defaultExpanded className={classes.paper}>
        <AccordionSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='content'
          id='header'
        >
          <Typography variant='body2' className={classes.heading}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>{body}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Collapsible;
