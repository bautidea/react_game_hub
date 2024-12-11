import { Box, Button, Grid2, Typography } from '@mui/material';
import { useGames } from '../../hooks/useGames';
import { GameCard } from './GameCard';
import { GameQuery, Genres } from '../../types';
import { DisplayGridIcon } from '../../assets/Emojis/DisplayGridIcon';
import { DisplayFlexIcon } from '../../assets/Emojis/DisplayFlexIcon';
import { OrderSelector } from './OrderSelector';
import { useEffect, useState } from 'react';
import { useViewPortWidth } from '../../utils/useViewPortWidth';

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
  // States for controlling grid display and showing additional game info.
  const [displayGrid, setDisplayGrid] = useState<boolean>(true);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const { viewportWidth } = useViewPortWidth();

  useEffect(() => {
    if (viewportWidth < 1175) {
      setDisplayGrid(true);
    }
  }, [viewportWidth]);

  function changeDisplay() {
    setDisplayGrid((prevValue) => !prevValue);
  }

  function handleSelectedCard(cardId: number | null) {
    setExpandedCardId(cardId);
  }

  // Fetched games.
  const { games, isLoading, isError, error } = useGames();

  if (isError) return <div>{`Error ${error}`}</div>;

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        '@media (min-width: 1175px)': {
          marginRight: '40px',
          paddingLeft: '15px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '20px 0 0',
          marginBottom: '30px',
          alignItems: 'center',
          '@media (max-width:1175px)': {
            marginLeft: '45px',
          },
        }}
      >
        <Box sx={{ minWidth: '15%' }}>
          <OrderSelector
            value={gameQuery.selectedOrder}
            handleOrderSelect={handleOrderSelect}
          />
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'row',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              marginRight: '10px',
              fontSize: '1.1rem',
              fontWeight: '500',
              letterSpacing: '1px',
            }}
          >
            Display options:
          </Typography>

          <Button
            sx={{
              padding: 0,
              opacity: `${displayGrid ? 1 : 0.5}`,
              transition: 'opacity 0.3s ease',
            }}
            onClick={changeDisplay}
            disabled={displayGrid === true}
          >
            <DisplayGridIcon />
          </Button>

          <Button
            sx={{
              padding: 0,
              opacity: `${!displayGrid ? 1 : 0.5}`,
              transition: 'opacity 0.3s ease',
            }}
            onClick={changeDisplay}
            disabled={displayGrid === false}
          >
            <DisplayFlexIcon />
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        {displayGrid && (
          <Grid2 container columnSpacing={4} rowSpacing={{ xs: 4, xl: 9 }}>
            {(isLoading ? [...Array(NUMBEROFSKELETONS)] : games)?.map(
              (game, index) => (
                <Grid2
                  key={isLoading ? index : game.id}
                  size={{ xs: 12, md: 6, lg: 4, xl: 3 }}
                  sx={{
                    justifyItems: 'center',
                    alignContent: 'center',
                    height: {
                      xs: '71.5vw',
                      md: '39vw',
                      lg: '27vw',
                      xl: '20vw',
                    },
                  }}
                >
                  <GameCard
                    game={isLoading ? undefined : game}
                    handleGenreSelect={handleGenreSelect}
                    displayGrid={displayGrid}
                    isMobile={viewportWidth < 1175}
                    selectedCardId={expandedCardId}
                    handleSelectedCard={handleSelectedCard}
                  />
                </Grid2>
              )
            )}
          </Grid2>
        )}
        {!displayGrid && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '40px',
              width: '50%',
            }}
          >
            {(isLoading ? [...Array(NUMBEROFSKELETONS)] : games)?.map(
              (game, index) => (
                <GameCard
                  key={isLoading ? index : game.id}
                  game={isLoading ? undefined : game}
                  handleGenreSelect={handleGenreSelect}
                  displayGrid={displayGrid}
                  isMobile={viewportWidth < 1175}
                  selectedCardId={expandedCardId}
                  handleSelectedCard={handleSelectedCard}
                />
              )
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
