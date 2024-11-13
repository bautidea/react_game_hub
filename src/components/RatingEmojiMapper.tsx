import bullsEye from '../assets/Emojis/bulls-eye.webp';
import meh from '../assets/Emojis/meh.webp';
import stop from '../assets/Emojis/stop.png';
import thumbsUp from '../assets/Emojis/thumbs-up.webp';
import { Tooltip } from '@mui/material';

export function RatingEmojiMapper({ rating }: { rating: number }) {
  if (!rating) return;

  const getEmojiProps = () => {
    if (rating <= 2) {
      return { src: stop, alt: 'Skip' };
    } else if (rating <= 3) {
      return { src: meh, alt: 'Meh' };
    } else if (rating <= 4) {
      return { src: thumbsUp, alt: 'Recommended' };
    } else if (rating <= 5) {
      return { src: bullsEye, alt: 'Exceptional' };
    }
  };

  const imgProps = getEmojiProps();

  return (
    <Tooltip title={imgProps?.alt}>
      <img {...imgProps} width={'100%'} height={'100%'} />
    </Tooltip>
  );
}
