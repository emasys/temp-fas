import React, { useEffect } from 'react';
import { Modal } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';
import { handleAuthModal, updateInvoiceValue } from '../redux/actions/common';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import CodeForm from './CodeForm';
import BAVForm from './BAVForm';
import BookingForm from './BookingForm';
import InvoiceForm from './InvoiceForm';

interface Props {}
const _component: any = {
  login: <LoginForm />,
  signUp: <SignUpForm />,
  code: <CodeForm />,
  bav: <BAVForm />,
  bookVendor: <BookingForm />,
  invoice: <InvoiceForm />,
};
const ModalComponent: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const page = useSelector((state: AppState) => state.common.isLogin);
  const content = useSelector((state: AppState) => state.common.drawerContent);
  useEffect(() => {
    if (content?.invoice) {
      dispatch(updateInvoiceValue(content.invoice));
    }
  }, [content?.invoice, open]);
  return (
    <Modal
      open={open}
      onClose={() => dispatch(handleAuthModal(false))}
      aria-labelledby='login-modal'
      aria-describedby='login-modal'
    >
      <>{_component[page]}</>
    </Modal>
  );
};

export default ModalComponent;
