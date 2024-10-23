import { axiosInstance } from './axiosInstance';

export async function fetchGames() {
  const controller = new AbortController();

  const response = await axiosInstance.get('/games', {
    signal: controller.signal,
  });

  return response.data.results;
}
