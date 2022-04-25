import { PathParams, rest } from 'msw';

const users: User[] = [
  {
    id: 'test1',
    pw: '1234',
  },
];

const login = rest.post<LoginRequestBody, PathParams, LoginResponseBody>('/login', (req, res, ctx) => {
  const { id, pw } = req.body;

  if (users.find((user) => user.id === id && user.pw === pw)) {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: 'login success',
        isLogin: true,
      }),
    );
  }
  return res(
    ctx.status(500),
    ctx.json({
      status: 500,
      message: '로그인에 실패했습니다.',
      isLogin: false,
    }),
  );
});

export default {
  login,
};
