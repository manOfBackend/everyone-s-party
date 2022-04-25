declare global {
  interface PostsResponseBody {
    posts: Post[];
  }
  interface LoginResponseBody {
    isLogin: boolean;
    message: string;
  }
}

export {};
