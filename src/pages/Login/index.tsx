import { Actions, useDispatch } from '@src/Redux';
import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import LoginTextField from '@src/components/molecules/LoginTextField';
import ButtonCTA from '@src/components/atoms/ButtonCTA';

interface LoginFormValue {
  id: string;
  pw: string;
}

const Login = () => {
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
  });

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="p-8 w-full max-w-2xl">
        <div className="h-14">
          <button type="button" className="w-6 h-6 rounded-lg  cursor-pointer hover:brightness-95 ">
            뒤
          </button>
          {/* <ButtonCTA key="뒤">뒤</ButtonCTA> */}
        </div>
        <div className="mt-10 h-4/5">
          <span className="text-xl font-bold">아이디와 비밀번호를 적어주세요.</span>
          <Formik
            initialValues={{
              id: '',
              pw: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values: LoginFormValue) => {
              dispatch(
                Actions.loginActions.fetchLogin.request({
                  id: values.id,
                  pw: values.pw,
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
            }: FormikProps<LoginFormValue>) => (
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
                  name="비밀번호"
                  id="pw"
                  value={values.pw}
                  onchange={handleChange}
                  placeholder="비밀번호 입력해주십세요"
                />
                {touched.pw && errors.pw && <div className="text-red-400">{errors.pw}</div>}
                <div className="mt-40">
                  <ButtonCTA type="submit" btnColor="rgb(153,246,228)" textColor="white" onSubmit={handleSubmit}>로그인</ButtonCTA>
                  <div className="mt-10">
                    <ButtonCTA
                      type="button"
                      btnColor="rgb(253,224,71)"
                      textColor="rgb(82,82,82)"
                      onClick={() => {
                        alert('아직 준비중입니다 T_T');
                      }}
                    >
                      카카오톡으로 로그인
                    </ButtonCTA>
                  </div>
                </div>

              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
