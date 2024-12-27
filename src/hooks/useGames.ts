import { useQuery } from '@tanstack/react-query';
import { Game, GameQuery } from '../types';
import { fetchData } from '../services/fetchData';

export function useGames({ gameQuery }: { gameQuery: GameQuery }) {
  const {
    data: games,
    isLoading,
    isError,
    error,
  } = useQuery<Game[]>({
    queryKey: ['games', gameQuery],
    queryFn: ({ signal, queryKey }) => {
      const [, queryParams] = queryKey as [string, GameQuery];

      const requestConfig = {
        params: {
          page_size: 60,
          ordering: queryParams.selectedOrder,
          genres: queryParams.selectedIdGenre,
          platforms: queryParams.selectedIdPlatform,
          search: queryParams.searchQuery,
        },
      };

      return fetchData('/games', signal, requestConfig);
    },
  });

  return { games, isLoading, isError, error };
}
