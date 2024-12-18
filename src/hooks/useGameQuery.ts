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
    setGameQuery((prevValue) => {
      if (id !== prevValue.selectedIdGenre)
        return { ...prevValue, selectedIdGenre: id };
      else return { ...prevValue, selectedIdGenre: null };
    });
  };

  const handlePlatformSelect = (clickedPlatform: ParentPlatforms) => {
    const { id } = clickedPlatform;
    setGameQuery((prevValue) => {
      if (id !== prevValue.selectedIdPlatform)
        return { ...prevValue, selectedIdPlatform: id };
      else return { ...prevValue, selectedIdPlatform: null };
    });
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
