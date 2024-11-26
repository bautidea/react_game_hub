import { useQuery } from '@tanstack/react-query';
import { Genres } from '../types';
import { fetchData } from '../services/fetchData';

export function useGenres() {
  const {
    data: genres,
    isLoading,
    isError,
    error,
  } = useQuery<Genres[]>({
    queryKey: ['genres'],
    queryFn: ({ signal }) => fetchData('/genres', signal),
  });

  return { genres, isLoading, isError, error };
}
