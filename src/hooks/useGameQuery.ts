import { useState } from 'react';
import { GameQuery, Genres, ParentPlatforms } from '../types';

export function useGameQuery() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    selectedIdGenre: null,
    selectedIdPlatform: null,
    selectedOrder: '',
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

  return {
    gameQuery,
    handleGenreSelect,
    handlePlatformSelect,
    handleOrderSelect,
  };
}
