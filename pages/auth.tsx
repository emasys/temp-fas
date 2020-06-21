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
  const pathArr = path.split('/');
  const id = pathArr[pathArr.length - 1]
  useEffect(() => {
    if (query?.code) {
      dispatch(instagramAuth(query.code, id));
      // router.push(path || '/');
    }
  }, [path]);
  return <div />;
}
