import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../services/fetchData';

export function usePlatforms() {
  const {
    data: platforms,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ['platforms'],
    queryFn: ({ signal }) => fetchData('/platforms/lists/parents', signal),
  });

  return { platforms, isLoading, error, isError };
}
