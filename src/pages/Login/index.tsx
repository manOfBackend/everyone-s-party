/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Actions, useDispatch } from '@src/Redux';
import React, { useState } from 'react';

const Login = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [pw, setPW] = useState('');

  const checkIdAndPWRegex = () => {
    const isValid = id.length >= 5 && id.length <= 16 && pw.length >= 4 && pw.length <= 16;
    return isValid;
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="p-8 w-full max-w-2xl">
        <div className="h-14">
          <button type="button" className="w-6 h-6 rounded-lg  cursor-pointer hover:brightness-95 ">
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
              className="border-0 m-0 p-0 caret-gray-400 h-11 w-full rounded-none border-b-2 outline-0 border-stone-200 font-sqop text-left focus:border-teal-200"
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
              className="border-0 m-0 p-0 caret-gray-400 h-11 w-full rounded-none border-b-2 outline-0 border-stone-200 font-sqop text-left focus:border-teal-200"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
          <div
            className={['w-full flex items-center h-12 rounded-lg border-none cursor-pointer justify-center mt-40 hover:brightness-95 ', checkIdAndPWRegex() ? 'text-white bg-teal-200' : 'text-neutral-200 bg-neutral-200'].join()}
            onClick={() => (checkIdAndPWRegex() ? dispatch(Actions.loginActions.fetchLogin.request({ id, pw })) : '')}
          >
            로그인
          </div>
          <div
            className="'w-full flex items-center h-12 rounded-lg border-none cursor-pointer justify-center mt-5 hover:brightness-95 text-neutral-600 bg-yellow-300 text-base"
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
