import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../lib/initialState";
import { getVendorStatus } from "../redux/selectors/vendors";
import { fetchVendorPayments } from "../redux/actions/vendors";
import PaymentRow from "./PaymentRow";
import { makeStyles, Theme, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: "3rem 0rem 3rem 3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0rem 2rem 1rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0 1rem .5rem",
    },
  },
  tableHeaderContainer: {
    textAlign: "center",
    marginBottom: "2rem",
    paddingLeft: "2rem",
  },
  textHeader: {
    marginBottom: "1rem",
    borderBottom: "1px solid #00000038",
    paddingBottom: ".25rem",
    fontWeight: 100,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function VendorPayments(): ReactElement {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { auth } = useSelector((state: AppState) => state.auth);
  const ownVendor = useSelector((state: AppState) => getVendorStatus(state));
  const payments = useSelector((state: AppState) => state.vendor.payments);

  useEffect(() => {
    if (!auth || !ownVendor?.id) return;
    dispatch(fetchVendorPayments(ownVendor?.id));
  }, [auth, ownVendor?.id]);

  return (
    <div className={classes.container}>
      <Typography className={classes.textHeader} variant="h5">
        Payments
      </Typography>
      <div>
        {payments?.map((payment) => (
          <PaymentRow payment={payment} />
        ))}
      </div>
    </div>
  );
}
