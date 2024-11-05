import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { PlatformMapper } from './PlatformMapper';
import { CriticScore } from './CriticScore';
import { Game } from '../types';
import { useViewPortWidth } from '../hooks/useViewPortWidth';

export function GameCard({ game }: { game: Game }) {
  const { ViewportWidth } = useViewPortWidth();

  const textBoxWidth =
    ViewportWidth >= 1535
      ? '16vw'
      : ViewportWidth >= 1200
      ? '23vw'
      : ViewportWidth >= 900
      ? '28vh'
      : '460px';

  return (
    <Card
      sx={{
        minHeight: '28rem',
        maxWidth: '500px',
        borderRadius: '15px',
        border: '1px #4a4e69 solid',
        ':hover .expandableText': {
          overflow: 'visible',
          whiteSpace: 'normal',
          maxWidth: '100%',
        },
      }}
    >
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
          className="expandableText"
          sx={{
            width: `${textBoxWidth}`,
            fontSize: '2rem',
            marginTop: '15px',
            fontWeight: '500',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {game.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
