import { useQuery } from '@tanstack/react-query';
import { Game } from '../types';
import { fetchData } from '../services/fetchData';

export function useGames() {
  const requestConfig = {
    params: {
      page_size: 60,
      ordering: null,
    },
  };

  const {
    data: games,
    isLoading,
    isError,
    error,
  } = useQuery<Game[]>({
    queryKey: ['games'],
    queryFn: ({ signal }) => fetchData('/games', signal, requestConfig),
  });

  return { games, isLoading, isError, error };
}
