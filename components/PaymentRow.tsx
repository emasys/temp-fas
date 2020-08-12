import * as React from "react";
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import Link from "next/link";
import { formatMoney } from "../util";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      display: "flex",
      paddingLeft: "2rem",
      textAlign: "center",
      alignItems: "center",
      height: "6rem",
      marginBottom: "1rem",
      borderRadius: "0.2rem",
      background: "#fbfbfb",
      boxSizing: "border-box",
      position: "relative",
      [theme.breakpoints.down("xs")]: {
        height: "3rem",
        justifyContent: "space-between",
        textAlign: "left",
        paddingLeft: "0.5rem",
      },
    },
    indicator: {
      position: "absolute",
      height: "3.7rem",
      borderRadius: "0.5rem",
      width: "0.3125rem",
      top: "19%",
      left: 0,
      [theme.breakpoints.down("xs")]: {
        top: ".5rem",
        height: "2rem",
        display: "none",
      },
    },
    jobIdText: {
      textTransform: "capitalize",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.7rem",
      },
    },
    jobLink: {
      "&:hover": {
        textDecoration: "underline",
      },
    },
    date: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    amount: {
      fontWeight: 900,
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.75rem",
        textAlign: "center",
      },
    },
    statusWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingRight: "2rem",
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        paddingRight: ".5rem",
      },
    },
    status: {
      cursor: "pointer",
      height: "2.2262rem",
      width: "auto",
      padding: "0 2rem",
      display: "flex",
      fontSize: ".875rem",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "1.113rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: ".75rem",
        padding: "0 1.25rem",
      },
    },
  })
);

interface IPaymentRowProps {
  payment: {
    createdAt: string;
    status: string;
    job: {
      id: string;
      cost: number;
    };
  };
}

const formatJobId = (id: string) => {
  const parts = id.split("-");
  return parts.slice(0, 2).join("-").concat("...");
};

const statusColorMap = {
  pending: {
    backgroundColor: "rgba(255, 133, 21, 0.1)",
    color: "rgba(249, 132, 23,1)",
  },
  withdrawable: {
    backgroundColor: "rgba(67, 206, 162, 1)",
    color: "#FFF",
  },
  withdrawn: {
    backgroundColor: "#574497",
    color: "#FFF",
  },
  dispute: {
    backgroundColor: "rgba(255, 0, 0, 0.8)",
    color: "#FFF",
  },
};

const statusTextMap = {
  pending: "Pending",
  withdrawable: "Active",
  withrawn: "Withdrawn",
  dispute: "Dispute",
};

const PaymentRow: React.FC<IPaymentRowProps> = ({
  payment: {
    createdAt: date,
    status,
    job: { id: jobId, cost: amount },
  },
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.row}>
      <div
        className={classes.indicator}
        style={{
          backgroundColor:
            status === "pending"
              ? "rgb(249, 132, 23, 0.7)"
              : statusColorMap[status].backgroundColor,
        }}
      />
      <Grid item xs={4} md={3}>
        <Link href={`/dashboard?tab=${jobId}`}>
          <a className={classes.jobLink}>
            <Typography variant="body2" className={classes.jobIdText}>
              {formatJobId(jobId)}
            </Typography>
          </a>
        </Link>
      </Grid>
      <Grid item sm={3} className={classes.date}>
        <Typography variant="body2">
          {moment(date).format("yyyy-MM-DD")}
        </Typography>
      </Grid>
      <Grid item xs={4} md={3}>
        <Typography variant="body2" className={classes.amount}>
          {formatMoney(amount)}
        </Typography>
      </Grid>
      <Grid item xs={4} md={3} className={classes.statusWrapper}>
        <Typography
          variant="body2"
          className={classes.status}
          style={statusColorMap[status]}
          title={status === "pending" ? "Pending job completion" : ""}
        >
          {statusTextMap[status]}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PaymentRow;
