import { axiosInstance } from './axiosInstance';

export async function fetchGenres() {
  const endPoint = '/genres';
  const controller = new AbortController();

  const response = await axiosInstance.get(endPoint, {
    signal: controller.signal,
  });

  return response.data.results;
}
