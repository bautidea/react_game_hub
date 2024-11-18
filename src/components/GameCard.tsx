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
import { Game, Genres } from '../types';
import { RatingEmojiMapper } from './RatingEmojiMapper';
import { useState } from 'react';
import { formatDate } from '../utils/formatDate';

interface Props {
  game?: Game;
  handleGenreSelect: (clickedGenre: Genres) => void;
  displayGrid: boolean;
}

export function GameCard({ game, handleGenreSelect, displayGrid }: Props) {
  const [showGameAdditionalInfo, setShowGameAdditionalInfo] =
    useState<boolean>(false);

  const handleGenreClick = (clickedGenre: Genres) => {
    handleGenreSelect(clickedGenre);
  };

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
          width: `${game ? 'auto' : '100%'}`,
          border: '1px #4a4e69 solid',
          ':hover': {
            transform: 'scale(1.05)',
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            paddingInline: '10px',
            paddingTop: '10px',
            borderRadius: '15px',
          }}
        >
          {game ? (
            <CardMedia
              component="img"
              alt={`${game.slug} game cover`}
              image={game.background_image}
              sx={{
                width: '100%',
                height: 'auto',
                aspectRatio: displayGrid ? '14/9' : '16/9',
                '@media (min-width: 1536px)': {
                  aspectRatio: displayGrid ? '12/9' : '16/9',
                },
              }}
            />
          ) : (
            <Skeleton
              variant="rounded"
              sx={{
                minWidth: `${displayGrid ? '5vw' : '40vw'}`,
                height: 'auto',
                aspectRatio: displayGrid ? '14/9' : '16/9',
                '@media (min-width: 1536px)': {
                  aspectRatio: displayGrid ? '12/9' : '16/9',
                },
              }}
            />
          )}
        </Box>

        <CardContent>
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
            sx={{
              width: `95%`,
              fontSize: '2.2rem',
              marginTop: '15px',
              fontWeight: '500',
              overflow: `${showGameAdditionalInfo ? 'visible' : ' hidden'}`,
              textOverflow: 'ellipsis',
              whiteSpace: `${showGameAdditionalInfo ? 'normal' : ' nowrap'}`,
            }}
          >
            {game ? game.name : <Skeleton variant="rounded" />}
          </Typography>

          <Box
            sx={{
              width: '30px',
              height: '30px',
              marginTop: '5px',
            }}
          >
            {game ? (
              <RatingEmojiMapper rating={game.rating} />
            ) : (
              <Skeleton variant="rounded" height={'100%'} width={'100%'} />
            )}
          </Box>

          {(!displayGrid || showGameAdditionalInfo) && game && (
            <Box
              sx={{
                marginTop: '25px',
                display: 'flex',
                flexDirection: `${displayGrid ? 'column' : 'row'}`,
                gap: `${displayGrid ? 0 : '30px'}`,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: 'rgb(255,255,255,0.4)',
                    fontSize: '1.2rem',
                    marginRight: '10px',
                  }}
                >
                  Release date:
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1.3rem',
                  }}
                >
                  {formatDate(game?.released)}
                </Typography>
              </Box>

              {displayGrid && <Divider sx={{ margin: '5px 0' }} />}

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: 'rgb(255,255,255,0.4)',
                    fontSize: '1.2rem',
                    marginRight: '10px',
                  }}
                >
                  Genres:
                </Typography>

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
                    <span key={genre.id}>
                      <Typography
                        component="p"
                        variant="caption"
                        sx={{
                          fontSize: '1.3rem',
                          display: 'inline',
                          ':hover': {
                            cursor: 'pointer',
                            color: 'rgb(255,255,255,0.7)',
                          },
                        }}
                      >
                        <span
                          style={{
                            textDecoration: 'underline',
                          }}
                          onClick={() => handleGenreClick(genre)}
                        >
                          {genre.name}
                        </span>
                      </Typography>

                      <Typography sx={{ display: 'inline' }}>
                        {ind === game.genres.length - 1 ? '' : ',\u00A0'}
                      </Typography>
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
