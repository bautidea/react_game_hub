import { Grid2 } from '@mui/material';
import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';
import './loader.css';

export function Main() {
  const { games, isLoading, isError, error } = useGames();

  if (isError) return <div>{`Error ${error}`}</div>;

  const numberOfSkeletons = 12;

  return (
    <Grid2
      container
      columnSpacing={4}
      rowSpacing={3}
      sx={{ margin: '30px 30px' }}
    >
      {(isLoading ? [...Array(numberOfSkeletons)] : games)?.map(
        (game, index) => (
          <Grid2
            key={isLoading ? index : game.id}
            size={{ xs: 12, md: 6, lg: 4, xl: 3 }}
            sx={{
              justifyItems: 'center',
              height: {
                xs: 'auto',
                md: '26rem',
              },
              alignItems: 'center',
            }}
          >
            <GameCard game={isLoading ? undefined : game} />
          </Grid2>
        )
      )}
    </Grid2>
  );
}
