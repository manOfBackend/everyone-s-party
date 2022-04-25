import './index.css';
import { Actions, useDispatch } from '@src/Redux';
import React, { useState } from 'react';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPW] = useState('');

  const dispatch = useDispatch();

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <span className="text-xl font-bold">아이디와 비밀번호를 적어주세요.</span>
      <span className="mt-5">
        <span className="mr-8">User: </span>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border border-solid rounded-md border-gray-900 w-48 h-8"
          placeholder="아이디를 입력해주세요."
        />
      </span>
      <span className="m-5">
        <span className="mr-1">password:</span>
        <input
          type="password"
          id="pw"
          value={pw}
          onChange={(e) => setPW(e.target.value)}
          className="border border-solid rounded-md border-gray-900 w-48 h-8"
          placeholder="비밀번호를 입력해주세요."
        />
      </span>
      <button
        type="button"
        className="login-button"
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
