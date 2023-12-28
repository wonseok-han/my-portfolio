import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import queryString from 'query-string';

import config from 'config';

const instance = axios.create({
  baseURL: `${config.API_BASE_URL}${config.API_POSTFIX}`,
});

instance.interceptors.request.use((axiosConfig) => {
  axiosConfig.headers = Object.assign(
    { 'Content-Type': 'application/json' },
    axiosConfig.headers
  );

  return axiosConfig;
});

export const request = async <T = unknown>({
  method,
  url,
  headers,
  data,
  params,
}: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return await instance({
    method,
    url: params ? url + `?${queryString.stringify(params)}` : url,
    headers,
    data,
  });
};
