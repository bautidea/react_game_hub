import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchGames } from '../services/fetchGames';
import { Game } from '../types';
import { PlatformMapper } from './PlatformMapper';
import { CriticScore } from './CriticScore';

export function Main() {
  const {
    data: games,
    isLoading,
    isError,
    error,
  } = useQuery<Game[]>({ queryKey: ['games'], queryFn: fetchGames });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{`Error ${error}`}</div>;

  return (
    <Container>
      {games?.map((game) => (
        <Card key={game.id} sx={{ maxHeight: '600px', maxWidth: '400px' }}>
          <CardMedia
            component="img"
            alt={`${game.slug} game cover`}
            image={game.background_image}
            sx={{
              width: '100%',
              aspectRatio: '16/9',
            }}
          />

          <CardContent sx={{ marginTop: '8px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between',
              }}
            >
              <PlatformMapper
                parentPlatforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore criticScore={game.metacritic} />
            </Box>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontSize: '2.2rem', marginTop: '10px' }}
            >
              {game.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
