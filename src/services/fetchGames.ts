import { axiosInstance } from './axiosInstance';

export async function fetchGames() {
  const controller = new AbortController();

  const response = await axiosInstance.get('/games', {
    signal: controller.signal,
    params: {
      page_size: 60,
      ordering: null,
    },
  });

  return response.data.results;
}
