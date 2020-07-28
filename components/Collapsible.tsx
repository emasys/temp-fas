import React, { ReactChild } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import pdf from '../assets/arrowDown.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      color: '#292929',
      letterSpacing: '.1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      [theme.breakpoints.down('xs')]: {
        fontSize: '.8rem',
      },
    },
    paper: {
      boxShadow: 'none',
    },
    summary: {
      padding: 0,
    },
    content: {
      width: '100%',
    },
    btn: {
      display: 'none',
      borderRadius: '1.113rem',
      background: '#F6F6F6',
      color: '#546380',
      padding: 0,
      minWidth: '9rem',
      fontSize: '0.6875rem',
      minHeight: '2rem',
    },
    pdf: {
      marginRight: '.5rem',
    },
    details: {
      [theme.breakpoints.down('xs')]: {
        padding: '.5rem',
      },
    },
  })
);

interface Props {
  title: string;
  body?: string;
  download?: boolean;
  noDefaultOpen?: boolean;
  children?: ReactChild;
}
const Collapsible: React.FC<Props> = ({
  title,
  body,
  children,
  download,
  noDefaultOpen,
}) => {
  const classes = useStyles();
  const handleDownload = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div className={classes.root}>
      <Accordion defaultExpanded={!noDefaultOpen} className={classes.paper}>
        <AccordionSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='content'
          id='header'
        >
          <Typography variant='body2' className={classes.heading}>
            {title}{' '}
            {download && (
              <Button
                variant='text'
                className={classes.btn}
                onClick={handleDownload}
              >
                Make payment
              </Button>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.content}>
            <Typography variant='body2'>{body}</Typography>
            {children}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Collapsible;
