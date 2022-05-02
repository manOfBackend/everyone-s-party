/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Actions, useDispatch, useSelector } from '@src/Redux';
import React, { useEffect, useState } from 'react';
import './index.css';

const Login = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [pw, setPW] = useState('');

  const checkIdAndPWRegex = () => id.length >= 5 && id.length <= 16 && pw.length >= 4 && pw.length <= 16;
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="p-8 w-full max-w-2xl">
        <div className="header">
          <button type="button" className="backbtn">
            뒤
          </button>
        </div>
        <div className="mt-10 h-4/5">
          <span className="text-xl font-bold">아이디와 비밀번호를 적어주세요.</span>
          <div className="mt-5">
            <span className="mr-8">아이디</span>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="inputField"
              placeholder="아이디를 입력해주세요."
            />
          </div>
          <div className="mt-5">
            <span className="mr-1">비밀번호</span>
            <input
              type="password"
              id="pw"
              value={pw}
              onChange={(e) => setPW(e.target.value)}
              className="inputField"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
          <div
            className={checkIdAndPWRegex() ? 'login-button' : 'login-button--dis'}
            onClick={() => (checkIdAndPWRegex() ? dispatch(Actions.loginActions.fetchLogin.request({ id, pw })) : '')}
          >
            로그인
          </div>
          <div
            className="kakao-button"
            onClick={() => {
              alert('아직 준비중입니다 T_T');
            }}
          >
            카카오로 시작하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
