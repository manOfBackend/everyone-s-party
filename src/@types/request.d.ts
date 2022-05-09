declare global {

  interface PostsRequestBody {
    page?: number;
    keyword?: string;
  }
  interface LoginRequestBody {
    id: string;
    pw: string;
  }
  interface SignupRequestBody {
    id: string;
    pw: string;
    name: string;
  }
}

export {};
