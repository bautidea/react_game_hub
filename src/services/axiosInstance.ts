import axios from 'axios';

const rawgApiKey = import.meta.env.VITE_RAWG_KEY;

export const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    'key': rawgApiKey,
  },
});
