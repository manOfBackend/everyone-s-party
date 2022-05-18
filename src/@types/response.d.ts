declare global {
  interface PostsResponseBody {
    posts: Post[];
  }
  interface LoginResponseBody {
    isLogin: boolean;
    message?: string;
  }
  interface SignupResponseBody {
    isSuccess: boolean;
    message?: string;
  }
}

export {};
