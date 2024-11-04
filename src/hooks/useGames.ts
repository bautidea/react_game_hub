import { useQuery } from '@tanstack/react-query';
import { Game } from '../types';
import { fetchGames } from '../services/fetchGames';

export function useGames() {
  const {
    data: games,
    isLoading,
    isError,
    error,
  } = useQuery<Game[]>({ queryKey: ['games'], queryFn: fetchGames });

  return { games, isLoading, isError, error };
}
