import { useState } from 'react';
import { GameQuery, Genres, ParentPlatforms } from '../types';

export function useGameQuery() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    selectedIdGenre: null,
    selectedIdPlatform: null,
    selectedOrder: '',
    searchQuery: '',
  });

  const handleGenreSelect = (clickedGenre: Genres) => {
    const { id } = clickedGenre;
    setGameQuery({ ...gameQuery, selectedIdGenre: id });
  };

  const handlePlatformSelect = (clickedPlatform: ParentPlatforms) => {
    const { id } = clickedPlatform;
    setGameQuery({ ...gameQuery, selectedIdPlatform: id });
  };

  const handleOrderSelect = (clickedOrder: string) => {
    setGameQuery({ ...gameQuery, selectedOrder: clickedOrder });
  };

  const handleSearchBarQuery = (searchString: string) => {
    setGameQuery({ ...gameQuery, searchQuery: searchString });
  };

  return {
    gameQuery,
    handleGenreSelect,
    handlePlatformSelect,
    handleOrderSelect,
    handleSearchBarQuery,
  };
}
