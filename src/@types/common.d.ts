declare global {
  interface Post {
    newsId: string;
    contentId: string;
    title: string;
    cpId: number;
    imageUrl: string;
    contentUrl: string;
    regDt: number;
    modiDt: number;
    status: string;
    summary: string;
    searchId: string;
    commentCnt: number;
  }
}

export {};
