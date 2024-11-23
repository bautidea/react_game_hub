import { useQuery } from '@tanstack/react-query';
import { fetchGenres } from '../services/fetchGenres';
import { Genres } from '../types';

export function useGenres() {
  const {
    data: genres,
    isLoading,
    isError,
    error,
  } = useQuery<Genres[]>({ queryKey: ['genres'], queryFn: fetchGenres });

  return { genres, isLoading, isError, error };
}
