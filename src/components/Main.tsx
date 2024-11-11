import { Grid2 } from '@mui/material';
import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';
import { Genres } from '../types';
// import './loader.css';

interface Props {
  handleGenreSelect: (clickedGenre: Genres) => void;
}
export function Main({ handleGenreSelect }: Props) {
  const { games, isLoading, isError, error } = useGames();

  if (isError) return <div>{`Error ${error}`}</div>;
  // const games = null;
  // const isLoading = true;
  const numberOfSkeletons = 12;

  return (
    <Grid2
      container
      columnSpacing={4}
      rowSpacing={4}
      sx={{ margin: '30px 30px' }}
    >
      {(isLoading ? [...Array(numberOfSkeletons)] : games)?.map(
        (game, index) => (
          <Grid2
            key={isLoading ? index : game.id}
            size={{ xs: 12, md: 6, lg: 4, xl: 3 }}
            sx={{
              justifyItems: 'center',
              alignContent: 'center',
              aspectRatio: { md: '1/1.02' },
              height: {
                md: '37vw',
                lg: '26vw',
                xl: '20vw',
              },
            }}
          >
            <GameCard
              game={isLoading ? undefined : game}
              handleGenreSelect={handleGenreSelect}
            />
          </Grid2>
        )
      )}
    </Grid2>
  );
}
