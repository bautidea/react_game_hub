import { Box } from '@mui/material';
import { useGenres } from '../../hooks/useGenres';
import { usePlatforms } from '../../hooks/usePlatforms';
import { GameQuery, Genres, ParentPlatforms } from '../../types';
import { GenresSideBar } from './GenresSideBar';
import { PlatformsSideBar } from './PlatformsSideBar';

interface Props {
  handleGenreSelect: (clickedGenre: Genres) => void;
  handlePlatformSelect: (clickedPlatform: ParentPlatforms) => void;
  gameQuery: GameQuery;
  isMobile: boolean;
}

export function Aside({
  handleGenreSelect,
  handlePlatformSelect,
  gameQuery,
  isMobile,
}: Props) {
  const {
    genres,
    isLoading: isGenreLoading,
    isError: isGenreError,
  } = useGenres();
  const {
    platforms,
    isLoading: isPlatformLoading,
    isError: isPlatformError,
  } = usePlatforms();

  const isLoading = isGenreLoading || isPlatformLoading;
  if (isGenreError || isPlatformError) return;

  return (
    <Box
      sx={{
        height: '100%',
        margin: '5px 0 20px 40px',
        paddingRight: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        color: isMobile ? 'black' : 'auto',
      }}
    >
      <GenresSideBar
        elements={genres}
        listTitle={'Genres'}
        isLoading={isLoading}
        handleGenreSelect={handleGenreSelect}
        selectedGenre={gameQuery.selectedIdGenre}
      />
      <PlatformsSideBar
        elements={platforms}
        listTitle={'Platforms'}
        isLoading={isLoading}
        handlePlatformSelect={handlePlatformSelect}
        selectedPlatform={gameQuery.selectedIdPlatform}
        isMobile={isMobile}
      />
    </Box>
  );
}
