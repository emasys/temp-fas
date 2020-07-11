import React from 'react';
import { Modal } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../lib/initialState';
import { handleAuthModal } from '../redux/actions/common';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import CodeForm from './CodeForm';

interface Props {}
const _component: any = {
  login: <LoginForm />,
  signUp: <SignUpForm />,
  code: <CodeForm />
};
const Login: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.common.openAuthModal);
  const page = useSelector((state: AppState) => state.common.isLogin);
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

export default Login;
