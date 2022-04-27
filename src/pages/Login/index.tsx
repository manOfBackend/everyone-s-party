import './index.css';
import { Actions, useDispatch, useSelector } from '@src/Redux';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [pw, setPW] = useState('');
  const loginResult = useSelector((state) => state.loginReducer.isLogin);
  const errorMsg = useSelector((state) => state.loginReducer.error);

  useEffect(() => {
    if (loginResult === true) {
      alert('성공적으로 로그인 되었습니다.');
      navigate('/board');
    } else if (errorMsg) {
      alert(errorMsg);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginResult, errorMsg]);

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
