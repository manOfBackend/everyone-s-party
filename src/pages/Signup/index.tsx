/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { Actions, useDispatch } from '@src/Redux';
import React, { useState } from 'react';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    pw: '',
    pw2: '',
    name: '',
  });
  const checkIdAndPWRegex = () => {
    const isValid =
      userInfo.id.length >= 5 &&
      userInfo.id.length <= 16 &&
      userInfo.pw.length >= 4 &&
      userInfo.pw.length <= 16;
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
          <span className="text-xl font-bold">회원 정보를 입력해주세요.</span>
          <div className="mt-5">
            <span className="mr-8">아이디</span>
            <input
              type="text"
              id="id"
              value={userInfo.id}
              onChange={(e) => setUserInfo({ ...userInfo, id: e.target.value })}
              className="inputField"
              placeholder="아이디를 입력해주세요."
            />
          </div>
          <div className="mt-5">
            <span className="mr-8">이름</span>
            <input
              type="text"
              id="id"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              className="inputField"
              placeholder="이름 입력해주세요."
            />
          </div>
          <div className="mt-5">
            <span className="mr-1">비밀번호</span>
            <input
              type="password"
              id="pw"
              value={userInfo.pw}
              onChange={(e) => setUserInfo({ ...userInfo, pw: e.target.value })}
              className="inputField"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
          <div className="mt-5">
            <span className="mr-1">비밀번호 재 입력</span>
            <input
              type="password"
              id="pw"
              value={userInfo.pw2}
              onChange={(e) => setUserInfo({ ...userInfo, pw2: e.target.value })}
              className="inputField"
              placeholder="비밀번호를 다시 입력해주세요."
            />
          </div>
          <div
            className={[
              'w-full flex items-center h-12 rounded-lg border-none cursor-pointer justify-center mt-40 hover:brightness-95 ',
              checkIdAndPWRegex() ? 'text-white bg-teal-200' : 'text-neutral-200 bg-neutral-200',
            ].join()}
            onClick={() => {}}
          >
            확인
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
