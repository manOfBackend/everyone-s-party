import REQUEST_URL from '@src/constants/requestUrl';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`;

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
  login: (data: LoginRequestBody): Promise<LoginResponseBody> => request({ method: 'GET', url: REQUEST_URL.LOGIN, params: { _id: data.id, _pw: data.pw } }),
};
export default API;
