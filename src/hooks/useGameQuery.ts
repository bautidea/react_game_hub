import { useState } from 'react';
import { GameQuery, Genres } from '../types';

export function useGameQuery() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    selectedIdGenre: null,
    selectedOrder: '',
  });

  const handleGenreSelect = (clickedGenre: Genres) => {
    const { id } = clickedGenre;
    setGameQuery({ ...gameQuery, selectedIdGenre: id });
  };

  const handleOrderSelect = (clickedOrder: string) => {
    setGameQuery({ ...gameQuery, selectedOrder: clickedOrder });
  };

  return {
    gameQuery,
    handleGenreSelect,
    handleOrderSelect,
  };
}
