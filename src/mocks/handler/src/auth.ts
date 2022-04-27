import { PathParams, rest } from 'msw';

const users: User[] = [
  {
    id: 'test1',
    pw: '1234',
  },
  { id: 'parkyw1206', pw: '1111' },
];

const login = rest.post<LoginRequestBody, PathParams, LoginResponseBody>(
  '/login',
  (req, res, ctx) => {
    const { id, pw } = req.body;
    let message = '';
    let isLogin = false;
    const registeredUser = users.find((user) => user.id === id);

    if (registeredUser === undefined) {
      message = '존재하지 않는 아이디입니다.';
    }

    if (registeredUser && registeredUser.pw === pw) {
      isLogin = true;
      message = '로그인 성공';
    } else {
      message = '비밀번호가 일치하지 않습니다.';
    }
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message,
        isLogin,
      })
    );
  }
);

export default {
  login,
};
