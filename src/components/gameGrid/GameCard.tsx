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
import { Game, Genres } from '../../types';
import { RatingEmojiMapper } from './RatingEmojiMapper';
import { useEffect } from 'react';
import { formatDate } from '../../utils/formatDate';
import { getCroppedImageUrl } from '../../utils/image-url';

interface Props {
  game?: Game;
  handleGenreSelect: (clickedGenre: Genres) => void;
  displayGrid: boolean;
  isMobile: boolean;
  selectedCardId: number | null;
  handleSelectedCard: (cardId: number | null) => void;
}

export function GameCard({
  game,
  handleGenreSelect,
  displayGrid,
  isMobile,
  selectedCardId,
  handleSelectedCard,
}: Props) {
  const handleGenreClick = (clickedGenre: Genres) => {
    handleGenreSelect(clickedGenre);
  };

  function handleCardHoverIn(gameId: number) {
    if (!isMobile) handleSelectedCard(gameId);
  }

  function handleCardHoverOut() {
    if (!isMobile) handleSelectedCard(null);
  }

  function handleMobileShowAdditionalInfo(gameId: number) {
    handleSelectedCard(gameId);
  }

  function handleMobileHideAdditionalInfo() {
    handleSelectedCard(null);
  }

  const showGameAdditionalInfo = selectedCardId === game?.id;

  useEffect(() => {}, [showGameAdditionalInfo]);

  return (
    <Box
      onMouseEnter={game ? () => handleCardHoverIn(game.id) : undefined}
      onMouseLeave={handleCardHoverOut}
      sx={{
        width: '100%',
        '@media (max-width: 1175px)': {
          width: '80%',
          height: '100%',
          justifySelf: 'center',
          paddingInline: '10%',
        },
      }}
    >
      <Card
        elevation={showGameAdditionalInfo ? 5 : 1}
        sx={{
          borderRadius: '15px',
          width: `${game ? 'auto' : '100%'}`,
          border: '1px #4a4e69 solid',
          zIndex: showGameAdditionalInfo ? 1 : 0,
          position: 'relative',
          ':hover': {
            transform: isMobile ? 'none' : 'scale(1.05)',
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
              image={getCroppedImageUrl(game.background_image)}
              sx={{
                width: '100%', //dummy
                height: 'auto',
                objectFit: 'cover',
                overflow: 'hidden',
                aspectRatio: displayGrid ? '14/9' : '16/9',
                '@media (min-width: 1536px)': {
                  aspectRatio: displayGrid ? '12/9' : '16/9',
                },
                '@media (max-width:1175px)': {
                  aspectRatio: '1.3/1',
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
              maxWidth: '95%',
              fontSize: '2.2rem',
              marginTop: '15px',
              fontWeight: '500',
              overflow: `${showGameAdditionalInfo ? 'visible' : ' hidden'}`,
              textOverflow: 'ellipsis',
              whiteSpace: `${showGameAdditionalInfo ? 'normal' : ' nowrap'}`,
              letterSpacing: '1px',
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

          {!showGameAdditionalInfo && isMobile && (
            <Box
              sx={{
                width: 'max-content',
                justifySelf: 'center',
                fontSize: '1.2rem',
                textDecoration: 'underline dotted',
              }}
            >
              {game ? (
                <span onClick={() => handleMobileShowAdditionalInfo(game.id)}>
                  View more
                </span>
              ) : (
                <Skeleton variant="rounded" height={'1.2rem'} width={'200px'} />
              )}
            </Box>
          )}

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

          {showGameAdditionalInfo && isMobile && (
            <Box
              sx={{
                width: 'max-content',
                justifySelf: 'center',
                fontSize: '1.2rem',
                textDecoration: 'underline dotted',
              }}
            >
              <span onClick={handleMobileHideAdditionalInfo}>View less</span>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
