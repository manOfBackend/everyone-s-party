/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { Actions, useDispatch } from '@src/Redux';
import React from 'react';
import { Actions, useDispatch } from '@src/Redux';
import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import LoginTextField from '@src/components/atoms/LoginTextField';

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
      .min(4, ({ min }) => `비밀번호는 최소 ${min}글자 이상입니다.`)
      .max(16, ({ max }) => `비밀번호는 최소 ${max}글자 이상입니다.`)
      .required('비밀번호를 입력하세요.'),
    name: Yup.string()
      .min(1, ({ min }) => `이름은 최소 ${min}글자 이상입니다.`)
      .max(10, ({ max }) => `이름은 최소 ${max}글자 이상입니다.`)
      .matches(/(([A-Za-z])\w+)/)
      .required('이름을 입력하세요.'),
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
            validate={(values) => {
              const errors = {} as { id: string; name: string; pw: string; pw2: string };
              if (values.pw !== values.pw2) {
                errors.pw2 = '암호가 일치하지 않습니다. 다시 입력해주십시오.';
              }
              return errors;
            }}
            onSubmit={(values: SignupFormValue) => {
              dispatch(
                Actions.signupActions.fetchSignup.request({
                  id: values.id,
                  pw: values.pw,
                  name: values.id,
                }),
              );
            }}
          >
            {({
              errors,
              touched,
              handleSubmit,
              handleChange,
              values,
            }: FormikProps<SignupFormValue>) => (
              <Form className="flex flex-col w-full">
                <LoginTextField
                  name="아이디"
                  id="id"
                  value={values.id}
                  onchange={handleChange}
                  placeholder="아이디를 입력해주십세요"
                />
                {touched.id && errors.id && <div className="text-red-400">{errors.id}</div>}
                <LoginTextField
                  name="이름"
                  id="name"
                  value={values.name}
                  onchange={handleChange}
                  placeholder="이름을 입력해주십세요"
                />
                {touched.name && errors.name && <div className="text-red-400">{errors.name}</div>}
                <LoginTextField
                  name="비밀번호"
                  id="pw"
                  value={values.pw}
                  onchange={handleChange}
                  placeholder="비밀번호 입력해주십세요"
                />
                {touched.pw && errors.pw && <div className="text-red-400">{errors.pw}</div>}
                <LoginTextField
                  name="비밀번호 재 입력"
                  id="pw2"
                  value={values.pw2}
                  onchange={handleChange}
                  placeholder="비밀번호를 다시입력해주십세요"
                />
                {touched.pw2 && errors.pw2 && <div className="text-red-400">{errors.pw2}</div>}
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
