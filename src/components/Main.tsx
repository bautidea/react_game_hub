import { Grid2 } from '@mui/material';
import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';

export function Main() {
  const { games, isLoading, isError, error } = useGames();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{`Error ${error}`}</div>;

  return (
    <Grid2
      container
      columnSpacing={4}
      rowSpacing={3}
      sx={{ margin: '30px 15px' }}
    >
      {games?.map((game) => (
        <Grid2
          key={game.id}
          size={{ xs: 12, md: 6, lg: 4, xl: 3 }}
          sx={{
            justifyItems: 'center',
          }}
        >
          <GameCard game={game} />
        </Grid2>
      ))}
    </Grid2>
  );
}