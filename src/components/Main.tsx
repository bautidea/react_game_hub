import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchGames } from '../services/fetchGames';
import { Game } from '../types';

export function Main() {
  const {
    data: games,
    isLoading,
    isError,
    error,
  } = useQuery<Game[]>({ queryKey: ['games'], queryFn: fetchGames });

  console.log(games);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{`Error ${error}`}</div>;

  return (
    <Container>
      {games?.map((game) => (
        <Card key={game.id} sx={{ maxHeight: '300px', maxWidth: '250px' }}>
          <CardMedia
            component="img"
            height={'150px'}
            alt={`${game.slug} game cover`}
            image={game.background_image}
          />

          <CardContent>
            <Typography variant="h1" component="h2">
              {game.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
