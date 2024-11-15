import { Box, Grid2 } from '@mui/material';
import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';
import { GameQuery, Genres } from '../types';
import { DisplayGridIcon } from '../assets/Emojis/DisplayGridIcon';
import { DisplayFlexIcon } from '../assets/Emojis/DisplayFlexIcon';
import { OrderSelector } from './OrderSelector';

interface Props {
  gameQuery: GameQuery;
  handleGenreSelect: (clickedGenre: Genres) => void;
  handleOrderSelect: (clickedOrder: string) => void;
}

export function Main({
  gameQuery,
  handleGenreSelect,
  handleOrderSelect,
}: Props) {
  const { games, isLoading, isError, error } = useGames();

  if (isError) return <div>{`Error ${error}`}</div>;
  // const games = null;
  // const isLoading = true;
  const numberOfSkeletons = 12;

  return (
    <Box style={{ width: '100%', height: '100%' }}>
      <OrderSelector
        value={gameQuery.selectedOrder}
        handleOrderSelect={handleOrderSelect}
      />
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
                height: {
                  md: '39vw',
                  lg: '27vw',
                  xl: '21vw',
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
    </Box>
  );
}
