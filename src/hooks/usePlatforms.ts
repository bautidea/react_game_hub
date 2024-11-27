import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../services/fetchData';
import { ParentPlatforms } from '../types';

export function usePlatforms() {
  const {
    data: platforms,
    isLoading,
    error,
    isError,
  } = useQuery<ParentPlatforms[]>({
    queryKey: ['platforms'],
    queryFn: ({ signal }) => fetchData('/platforms/lists/parents', signal),
  });

  return { platforms, isLoading, error, isError };
}
