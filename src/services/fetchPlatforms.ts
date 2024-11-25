import { axiosInstance } from './axiosInstance';

export async function fetchPlatforms() {
  const endPoint = '/platforms';
  const controller = new AbortController();

  const request = await axiosInstance.get(endPoint, {
    signal: controller.signal,
  });

  return request.data.results;
}
