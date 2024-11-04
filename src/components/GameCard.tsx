import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { PlatformMapper } from './PlatformMapper';
import { CriticScore } from './CriticScore';
import { Game } from '../types';

export function GameCard({ game }: { game: Game }) {
  return (
    <Card sx={{ minHeight: '25rem', maxWidth: '450px' }}>
      <CardMedia
        component="img"
        alt={`${game.slug} game cover`}
        image={game.background_image}
        sx={{
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
  );
}
