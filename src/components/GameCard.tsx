import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Skeleton,
  Typography,
} from '@mui/material';
import { PlatformMapper } from './PlatformMapper';
import { CriticScore } from './CriticScore';
import { Game } from '../types';
import { useViewPortWidth } from '../hooks/useViewPortWidth';
import { RatingEmojiMapper } from './RatingEmojiMapper';
import { useState } from 'react';

interface Props {
  game?: Game;
}

export function GameCard({ game }: Props) {
  const [showGameAdditionalInfo, setShowGameAdditionalInfo] =
    useState<boolean>(false);

  const { ViewportWidth } = useViewPortWidth();

  const textBoxWidth =
    ViewportWidth >= 1535
      ? '15vw'
      : ViewportWidth >= 1200
      ? '21vw'
      : ViewportWidth >= 900
      ? '25vh'
      : '100%';

  return (
    <span
      onMouseEnter={() => setShowGameAdditionalInfo(true)}
      onMouseLeave={() => {
        setShowGameAdditionalInfo(false);
      }}
    >
      <Card
        elevation={showGameAdditionalInfo ? 5 : 1}
        sx={{
          borderRadius: '15px',
          border: '1px #4a4e69 solid',
          ':hover': {
            transform: 'scale(1.05)',
          },
          ':hover .expandableText': {
            overflow: 'visible',
            whiteSpace: 'normal',
            maxWidth: '100%',
          },
        }}
      >
        {game ? (
          <CardMedia
            component="img"
            alt={`${game.slug} game cover`}
            image={game.background_image}
            sx={{
              aspectRatio: '16/9',
              width: '100%',
              height: 'auto',
              paddingInline: '10px',
              paddingTop: '10px',
              borderRadius: '15px',
            }}
          />
        ) : (
          <Skeleton
            variant="rounded"
            sx={{
              width: 'auto',
              height: '15rem',
              marginInline: '10px',
              marginTop: '10px',
            }}
          />
        )}

        <CardContent sx={{ marginTop: '8px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
            }}
          >
            {game ? (
              <>
                <PlatformMapper
                  parentPlatforms={game.parent_platforms.map((p) => p.platform)}
                />
                <CriticScore criticScore={game.metacritic} />
              </>
            ) : (
              <>
                <Skeleton variant="rounded" height={'25px'} width={'40%'} />
                <Skeleton variant="rounded" height={'25px'} width={'20%'} />
              </>
            )}
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
            {game ? game.name : <Skeleton variant="rounded" />}
          </Typography>

          <Box width={'30px'} height={'30px'} marginTop={'5px'}>
            {game ? (
              <RatingEmojiMapper rating={game.rating} />
            ) : (
              <Skeleton variant="rounded" height={'100%'} width={'100%'} />
            )}
          </Box>

          {showGameAdditionalInfo && (
            <Box
              sx={{
                marginTop: '10px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Typography>Release date:</Typography>
                <Typography>{game?.released}</Typography>
              </Box>

              <Divider sx={{ margin: '5px 0' }} />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Typography>Genres:</Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    flexWrap: 'wrap',
                    width: '70%',
                  }}
                >
                  {game?.genres.map((genre, ind) => (
                    <span>
                      <a>{genre.name}</a>
                      {ind === game.genres.length - 1 ? '' : ',\u00A0'}
                    </span>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </span>
  );
}
