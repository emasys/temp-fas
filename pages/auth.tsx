import React, { ReactElement, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../lib/initialState';
import { useRouter } from 'next/router';
import { instagramAuth } from '../redux/actions/socialMedia';

interface Props {}

export default function Auth({}: Props): ReactElement {
  const router = useRouter();
  const dispatch = useDispatch();
  const { query } = router;
  const path = useSelector((state: AppState) => state.common.tempUri);
  useEffect(() => {
    if (query?.code) {
      dispatch(instagramAuth(query.code));
      console.log(query.code, '====');
      // router.push(path || '/');
    }
  }, [path]);
  return <div />;
}
