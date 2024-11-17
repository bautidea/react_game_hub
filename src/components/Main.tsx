import { Box, Button, Grid2, Typography } from '@mui/material';
import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';
import { GameQuery, Genres } from '../types';
import { DisplayGridIcon } from '../assets/Emojis/DisplayGridIcon';
import { DisplayFlexIcon } from '../assets/Emojis/DisplayFlexIcon';
import { OrderSelector } from './OrderSelector';
import { useState } from 'react';

interface Props {
  gameQuery: GameQuery;
  handleGenreSelect: (clickedGenre: Genres) => void;
  handleOrderSelect: (clickedOrder: string) => void;
}

const NUMBEROFSKELETONS = 12;

export function Main({
  gameQuery,
  handleGenreSelect,
  handleOrderSelect,
}: Props) {
  const [displayGrid, setDisplayGrid] = useState(true);

  const { games, isLoading, isError, error } = useGames();

  if (isError) return <div>{`Error ${error}`}</div>;

  function changeDisplay() {
    setDisplayGrid(!displayGrid);
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '20px 0 0',
          margin: '0 30px 15px',
          alignItems: 'center',
        }}
      >
        <Box sx={{ minWidth: '10%' }}>
          <OrderSelector
            value={gameQuery.selectedOrder}
            handleOrderSelect={handleOrderSelect}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="subtitle1"
            component="p"
            sx={{ marginRight: '10px', fontSize: '1.2rem', fontWeight: '500' }}
          >
            Display options:
          </Typography>
          <Button
            sx={{ padding: 0 }}
            onClick={changeDisplay}
            disabled={displayGrid === true}
          >
            <DisplayGridIcon />
          </Button>
          <Button
            sx={{ padding: 0 }}
            onClick={changeDisplay}
            disabled={displayGrid === false}
          >
            <DisplayFlexIcon />
          </Button>
        </Box>
      </Box>

      <Grid2
        container
        columnSpacing={4}
        rowSpacing={{ md: 4, xl: 9 }}
        sx={{ margin: '30px 30px' }}
      >
        {(isLoading ? [...Array(NUMBEROFSKELETONS)] : games)?.map(
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
    </Box>
  );
}
