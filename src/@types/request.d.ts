declare global {

  interface PostsRequestBody {
    page?: number;
    keyword?: string;
  }
  interface LoginRequestBody {
    id?: string;
    pw?: string;
  }
}

export {};
