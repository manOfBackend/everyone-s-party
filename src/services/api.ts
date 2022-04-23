import REQUEST_URL from '@src/constants/requestUrl';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3000';

const isAxiosError = (error: AxiosError): error is AxiosError => error.isAxiosError;

const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      const axiosError = error as AxiosError;
      if (axiosError && isAxiosError(axiosError)) {
        throw axiosError.response?.data;
      }
    }
  }
  return null;
};

const API = {
  posts: (data: PostsRequestBody): Promise<PostsResponseBody> => request({ method: 'GET', url: REQUEST_URL.POSTS, params: { _page: data.page } }),
};
export default API;
