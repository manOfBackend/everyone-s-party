/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { Actions, useDispatch } from '@src/Redux';
import React, { useState } from 'react';
import { Actions, useDispatch } from '@src/Redux';
import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';

interface SignupFormValue {
  id: string;
  pw: string;
  pw2: string;
  name: string;
}

const Signup = () => {
  const dispatch = useDispatch();

  const validationSchema = () => Yup.object().shape({
    id: Yup.string()
      .min(4, ({ min }) => `비밀번호는 최소 ${min}글자 이상입니다.`)
      .max(16, ({ max }) => `비밀번호는 최소 ${max}글자 이상입니다.`)
      .required('아이디를 입력해주세요.'),
    pw: Yup.string()
      .min(4, ({ min }) => `비밀번호는 최소 ${min}글자 이상입니다.`)
      .max(16, ({ max }) => `비밀번호는 최소 ${max}글자 이상입니다.`)
      .required('비밀번호를 입력하세요.'),
    pw2: Yup.string()
      .required('비밀번호를 입력하세요.'),
    name: Yup.string()
      .min(1, ({ min }) => `이름은 최소 ${min}글자 이상입니다.`)
      .max(10, ({ max }) => `이름은 최소 ${max}글자 이상입니다.`)
      .matches(/(([A-Za-z])\w+)/),
  });

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
          <Formik
            initialValues={{
              id: '',
              pw: '',
              pw2: '',
              name: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values: SignupFormValue) => {
              dispatch(Actions.signupActions.fetchSignup.request({ id: values.id, pw: values.pw, name: values.id }));
            }}
          >
            {({
              errors,
              touched,
              handleSubmit,
              handleChange,
              values,
            }: FormikProps<SignupFormValue>) => (
              <Form className="flex flex-col gap-4 w-full">
                <div className="mt-5">
                  <span className="mr-8">아이디</span>
                  <TextField
                    name="id"
                    className="inputField"
                    placeholder="아이디를 입력해주세요."
                    onChange={handleChange}
                    value={values.id}
                  />
                </div>
                {touched.id && errors.id && (
                  <div className="text-red-400">{errors.id}</div>
                )}
                <div className="mt-5">
                  <span className="mr-8">이름</span>
                  <TextField
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className="inputField"
                    placeholder="이름 입력해주세요."
                  />
                </div>
                {touched.name && errors.name && (
                  <div className="text-red-400">{errors.name}</div>
                )}
                <div className="mt-5">
                  <span className="mr-1">비밀번호</span>
                  <TextField
                    name="pw"
                    value={values.pw}
                    onChange={handleChange}
                    className="inputField"
                    placeholder="비밀번호를 입력해주세요."
                  />
                </div>
                {touched.pw && errors.pw && (
                  <div className="text-red-400">{errors.pw}</div>
                )}
                <div className="mt-5">
                  <span className="mr-1">비밀번호 재 입력</span>
                  <TextField
                    name="pw2"
                    value={values.pw2}
                    onChange={handleChange}
                    className="inputField"
                    placeholder="비밀번호를 다시 입력해주세요."
                  />
                  {touched.pw2 && errors.pw2 && (
                  <div className="text-red-400">{errors.pw2}</div>
                  )}
                </div>
                <button
                  className="w-full flex items-center h-12 rounded-lg border-none cursor-pointer justify-center mt-40 hover:brightness-95 text-white bg-teal-200"
                  type="submit"
                  onSubmit={() => handleSubmit()}
                >
                  확인
                </button>
              </Form>
            )}
          </Formik>

        </div>
      </div>
    </div>
  );
};

export default Signup;
function id(id: any) {
  throw new Error('Function not implemented.');
}
