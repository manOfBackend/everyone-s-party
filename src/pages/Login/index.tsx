import { Actions, useDispatch } from '@src/Redux';
import React, { useState } from 'react';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPW] = useState('');

  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="text" id="pw" value={pw} onChange={(e) => setPW(e.target.value)} />

      <button
        type="button"
        onClick={() => {
          dispatch(Actions.loginActions.fetchLogin.request({ id, pw }));
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;
