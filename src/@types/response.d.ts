declare global {
  interface PostsResponseBody {
    posts: Post[];
  }
  interface LoginResponseBody {
    login: {
      id: string;
      pw: string;
    }[];
  }
}

export {};
