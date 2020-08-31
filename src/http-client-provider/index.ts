import axios, { AxiosResponse, AxiosError } from 'axios';

export const getHttpClient = (baseURL: string) => {
  const defaultConfig = { baseURL };
  const httpClient = axios.create(defaultConfig);
  httpClient.interceptors.response.use(successInterceptor, errorInterceptor);

  return httpClient;
};

const successInterceptor = (axiosResponse: AxiosResponse) => {
  const { data } = axiosResponse;

  return data ? { ...axiosResponse, data: data.response || data.result } : axiosResponse;
};

const errorInterceptor = (error: AxiosError) => {
  const responseError = error.response;

  if (!responseError) {
    throw new Error(error.message);
  }

  const data = responseError?.data;
  const statusText = responseError?.statusText;
  const status = responseError?.status;
  const responseUrl = responseError?.request?.responseURL;
  const errors = data?.context?.errors;

  if (errors) {
    const { code, message } = errors[0];

    if (code) {
      throw { code, message, responseUrl };
    }

    throw { message, responseUrl }
  }

  if (status && statusText) {
    throw { code: status, message: statusText, responseUrl };
  }
};
