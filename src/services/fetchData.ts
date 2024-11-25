import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './axiosInstance';

export async function fetchData(
  endPoint: string,
  signal?: AbortSignal,
  requestConfig?: AxiosRequestConfig
) {
  const request = await axiosInstance.get(endPoint, {
    signal,
    params: { ...requestConfig },
  });

  return request.data.results;
}
