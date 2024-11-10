import { useState } from 'react';
import { GameQuery, Genres } from '../types';

export function useGameQuery() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    selectedIdGenre: null,
  });

  const handleGenreSelect = (clickedGenre: Genres) => {
    const { id } = clickedGenre;
    setGameQuery({ ...gameQuery, selectedIdGenre: id });
  };

  return {
    gameQuery,
    handleGenreSelect,
  };
}
