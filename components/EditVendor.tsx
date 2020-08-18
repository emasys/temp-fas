import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert from '@material-ui/lab/Alert';
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';
import { setValue, handleAuthModal } from '../redux/actions/common';
import { EActionTypes } from '../redux/actions/types';
import { updateVendorAPI, vendorLogoUpload, vendorHeaderUpload } from '../api';
import SelectInput from './SelectInput';
import { getLocations, getOneLocation } from '../redux/selectors/locations';
import { getServiceOptions } from '../redux/selectors/services';
import MoneyInput from './MoneyInput';
import { CloseRounded, EditRounded } from '@material-ui/icons';
import { phoneInput } from './BAVForm';
import UploadModal from './UploadModal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      width: '50rem',
      maxWidth: '80%',
      backgroundColor: '#fff',
      top: '5rem',
      left: 0,
      borderRadius: '.2rem',
      right: 0,
      margin: 'auto',
      outline: 'none',
      maxHeight: '95vh',
      overflow: 'auto',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
        minHeight: '100%',
        top: 0,
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: '3rem',
      borderRadius: '.2rem',
      backgroundColor: '#fff',
      [theme.breakpoints.down('xs')]: {
        padding: '3rem 1rem',
        minHeight: '50rem',
      },
    },
    button: {
      marginTop: '2rem',
      borderRadius: '.2rem',
    },
    inputBox: {
      margin: '.5rem 0',
    },
    inputRoot: {
      backgroundColor: '#fff',
      width: '100%',
    },
    title: {
      fontFamily: 'Alegreya',
      fontSize: '2rem',
      color: '#636363',
      textAlign: 'center',
      marginBottom: '.5rem',
    },
    subtitle: {
      marginBottom: '3rem',
      fontSize: '.9rem',
      color: '#636363',
      textAlign: 'center',
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
    selectWrapper: {
      marginTop: '.5rem',
    },
    caption: {
      fontSize: 12,
    },
    datePicker: {
      color: '#636363',
    },
    header: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      alignSelf: 'flex-start',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        // marginTop: '2rem',
      },
    },
    banner: {
      background: '#CECECE',
      minHeight: '10rem',
      position: 'relative',
      marginBottom: '3rem',
      display: 'flex',
      // justifyContent: 'flex-end',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    logoWrapper: {
      position: 'absolute',
      background: '#F7F7F7',
      width: '9.375rem',
      left: '8rem',
      top: '4.5rem',
      borderRadius: '50%',
      height: '9.375rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        left: '2rem',
      },
    },
    edit: {
      position: 'absolute',
      background: '#546380',
      padding: '.5rem',
      bottom: '0rem',
      right: '0rem',
      '&:hover': {
        background: '#546380',
      },
    },
    editIcon: {
      color: '#fff',
      fontSize: '1.5rem',
    },
    input: {
      display: 'none',
    },
    coverBtn: {
      position: 'absolute',
      bottom: '1rem',
      color: '#fff',
      right: '5rem',
      minHeight: '2.1875rem',
      borderRadius: '2rem',
      border: '0.0444rem solid #FFFFFF',
      [theme.breakpoints.down('xs')]: {
        right: 5,
        fontSize: '0.75rem',
        minWidth: '10rem',
      },
    },
  }),
);

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Provide a business name'),
  rate: Yup.string().required('Provide your average rates'),
  phoneNumber: Yup.string().required('Provide your phone number. ex - 070...'),
  service: Yup.object().required(),
  state: Yup.object().required(),
  area: Yup.object(),
});

const cropConfig = {
  unit: '%',
  width: 50,
  height: 50,
  x: 25,
  y: 25,
  aspect: 10 / 6,
};

const headerCropConfig = {
  unit: '%',
  width: 50,
  height: 50,
  x: 25,
  y: 25,
  aspect: 16 / 4,
};

const EditVendor: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const vendor = useSelector((state: AppState) => state.vendor.activeVendor);
  const services = useSelector((state: AppState) => getServiceOptions(state));
  const [openModal, setModalOpen] = React.useState(false);
  const [openHeaderModal, setHeaderModalOpen] = React.useState(false);
  const [upImg, setUpImg] = useState<any>();
  const currentLocation = useSelector((state: AppState) =>
    getOneLocation(state),
  );
  const locations = useSelector((state: AppState) => getLocations(state));
  const {
    handleChange,
    values,
    errors,
    isValid,
    touched,
    handleSubmit,
    handleBlur,
    isSubmitting,
    setFieldValue,
    setSubmitting,
  } = useFormik({
    initialValues: {
      name: vendor.name || '',
      rate: vendor.rate || '',
      phoneNumber: vendor.phoneNumber || '',
      state: currentLocation.state || { value: '' },
      area: currentLocation.area || { value: '' },
      service: services.find((service) => service.value === vendor.serviceId),
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      const { service, state, area, rate, phoneNumber, name } = values;
      const payload = {
        name,
        phoneNumber,
        serviceId: service.value,
        rate: Number(rate),
        locationId: area?.value ? area.value : state.value,
      };
      const data = await updateVendorAPI(vendor.id, payload);
      setSubmitting(true);
      if (!data) {
        setErrors({
          name: "We couldn't complete this operation",
        });
        return setSubmitting(false);
      }
      setSubmitting(false);
      dispatch(setValue(EActionTypes.UPDATE_VENDOR, data));
      dispatch(handleAuthModal(false));
    },
  });

  const areaOptions = locations.find((loc) => loc.value === values.state?.value)
    ?.areas;

  useEffect(() => {
    setSubmitting(false);
  }, [open]);

  const handleClose = () => {
    dispatch(handleAuthModal(false));
  };

  const handleTextChange = (e: any, value?: any, name?: string) => {
    handleChange(e);
    if (value) {
      setFieldValue(name, value?.title ? value.title : value || '');
      if (name === 'state') {
        setFieldValue('area', { value: '' });
      }
    }
  };

  const handleUpload = async (file: string) => {
    const data = await vendorLogoUpload({ logoUrl: file }, vendor.id);
    if (data) dispatch(setValue(EActionTypes.UPDATE_VENDOR, data));
    return data;
  };

  const handleHeaderUpload = async (file: string) => {
    const data = await vendorHeaderUpload({ headerUrl: file }, vendor.id);
    if (data) dispatch(setValue(EActionTypes.UPDATE_VENDOR, data));
    return data;
  };

  const onSelectFile = (e, header?: boolean) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      if (header) return setHeaderModalOpen(true);
      setModalOpen(true);
    }
  };

  return (
    <div className={classes.paper}>
      <div
        className={classes.banner}
        style={{
          backgroundImage: `url(${vendor.headerImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className={classes.header}>
          <IconButton onClick={handleClose}>
            <CloseRounded />
          </IconButton>
        </div>
        <UploadModal
          open={openHeaderModal}
          setStatus={setHeaderModalOpen}
          cropConfig={headerCropConfig}
          upImg={upImg}
          uploadAPI={handleHeaderUpload}
        />
        <input
          accept="image/*"
          value=""
          className={classes.input}
          id="header-upload"
          onChange={(e) => onSelectFile(e, true)}
          type="file"
        />
        <label htmlFor="header-upload">
          <Button
            variant="outlined"
            className={classes.coverBtn}
            component="span"
          >
            {vendor.headerImageUrl ? 'Change' : 'Upload'} cover image
          </Button>
        </label>
        <div
          className={classes.logoWrapper}
          style={{
            backgroundImage: `url(${vendor.logoUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {!vendor.logoUrl && (
            <Typography variant="body1">Upload logo</Typography>
          )}
          <UploadModal
            open={openModal}
            setStatus={setModalOpen}
            cropConfig={cropConfig}
            upImg={upImg}
            uploadAPI={handleUpload}
          />

          <input
            accept="image/*"
            value=""
            className={classes.input}
            id="logo-upload"
            onChange={onSelectFile}
            type="file"
          />
          <label htmlFor="logo-upload">
            <IconButton
              className={classes.edit}
              aria-label="upload picture"
              component="span"
            >
              <EditRounded className={classes.editIcon} />
            </IconButton>
          </label>
        </div>
      </div>

      <div className={classes.form}>
        {errors.name && (
          <Alert severity="error">
            Unfortunately we could not complete this operation.
          </Alert>
        )}
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={!!errors.name && touched.name}
              classes={{
                root: classes.inputRoot,
              }}
              variant="filled"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              className={classes.inputBox}
              name="name"
              id="name-error-helper-text"
              placeholder="Business name"
              helperText={touched.name && errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MoneyInput
              value={values.rate}
              variant="filled"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={!!errors.rate && touched.rate}
              name="rate"
              label="Average rate per job"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={!!errors.phoneNumber && touched.phoneNumber}
              classes={{
                root: classes.inputRoot,
              }}
              variant="filled"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
              className={classes.inputBox}
              name="phoneNumber"
              id="phone-error-helper-text"
              placeholder="Phone number"
              InputProps={{
                inputComponent: phoneInput,
              }}
              helperText={errors.phoneNumber && touched.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: '.5rem' }}>
            <SelectInput
              name="service"
              placeholder="Service category"
              variant="filled"
              options={services}
              handleChange={handleTextChange}
              value={values.service}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectInput
              name="state"
              placeholder="State"
              variant="filled"
              options={locations}
              handleChange={handleTextChange}
              value={values.state}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectInput
              name="area"
              placeholder="Area"
              variant="filled"
              options={areaOptions || []}
              handleChange={handleTextChange}
              value={values.area}
            />
          </Grid>
        </Grid>
        <Button
          onClick={() => handleSubmit()}
          className={classes.button}
          disabled={isSubmitting || !isValid}
          variant="contained"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default EditVendor;
