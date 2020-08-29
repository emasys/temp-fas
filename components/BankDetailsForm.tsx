import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Button,
  Collapse,
  IconButton,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserBankDetails } from '../redux/actions/auth';
import { AppState } from '../lib/initialState';
import Alert from '@material-ui/lab/Alert';
import { CloseRounded } from '@material-ui/icons';
import ToggleField from './ToggleField';
import { updateBankApi } from '../api';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      borderRadius: '.2rem',
      margin: 'auto',
      outline: 'none',
      overflow: 'auto',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      padding: '3rem',
      paddingTop: 0,
      backgroundColor: '#fff',
      [theme.breakpoints.down('xs')]: {
        padding: '.5rem .5rem',
      },
    },
    button: {
      marginTop: '2rem',
      borderRadius: '.2rem',
      width: '5rem',
      minHeight: '2rem',
    },
    inputBox: {
      margin: '.5rem 0',
    },
    inputRoot: {
      backgroundColor: '#fff',
    },
    title: {
      fontFamily: 'Alegreya',
      fontSize: '2rem',
      color: '#636363',
      textAlign: 'center',
      marginBottom: '3rem',
    },
    footer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '2rem',
    },
    divider: {
      height: '1px',
      width: '100%',
      marginBottom: '1.5rem',
      background: 'rgba(196, 196, 196, .2)',
    },
    signIn: {
      cursor: 'pointer',
      color: '#43CEA2',
    },
  }),
);

const validationSchema = Yup.object().shape({
  bankName: Yup.string().required('This field is required'),
  accountName: Yup.string().required('This field is required'),
  accountNumber: Yup.string()
    .length(10, 'Provide your 10-digit account number')
    .required('This field is required'),
});

const BankDetailsForm: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [show, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState<null | boolean>(null);
  const user = useSelector((state: AppState) => state.user);
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const {
    handleChange,
    values,
    errors,
    isValid,
    touched,
    handleSubmit,
    handleBlur,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      bankName: user?.bankDetails?.bankName || '',
      accountName: user?.bankDetails?.accountName || '',
      accountNumber: user?.bankDetails?.accountNumber || '',
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      const data = await updateBankApi(values);
      setSubmitting(true);
      if (!data) {
        setSubmitting(false);
        return setErrors({
          bankName: 'Invalid input characters',
        });
      }
      dispatch(updateUserBankDetails(data));
      setOpen(true);
      setEdit(false);
      setTimeout(() => {
        setOpen(false);
        setEdit(null);
      }, 3000);
      setSubmitting(false);
    },
  });
  useEffect(() => {
    setSubmitting(false);
  }, [open]);

  return (
    <div className={classes.paper}>
      <div className={classes.form}>
        <Collapse in={show}>
          <Alert
            severity="success"
            style={{ marginBottom: '.5rem' }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseRounded fontSize="inherit" />
              </IconButton>
            }
          >
            Changes saved!
          </Alert>
        </Collapse>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ToggleField
              value={values.bankName}
              error={touched.bankName && errors.bankName}
              handleBlur={handleBlur}
              editStatus={edit}
              handleChange={handleChange}
              name="bankName"
              label="Bank name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ToggleField
              value={values.accountName}
              error={touched.accountName && errors.accountName}
              handleBlur={handleBlur}
              editStatus={edit}
              handleChange={handleChange}
              name="accountName"
              label="Account name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ToggleField
              error={touched.accountNumber && errors.accountNumber}
              value={values.accountNumber}
              handleBlur={handleBlur}
              fieldType="number"
              editStatus={edit}
              handleChange={handleChange}
              name="accountNumber"
              label="Account Number"
            />
          </Grid>
        </Grid>

        <Button
          onClick={() => handleSubmit()}
          className={classes.button}
          disabled={isSubmitting || !isValid}
          variant="contained"
        >
          Save changes
        </Button>
      </div>
    </div>
  );
};

export default BankDetailsForm;
