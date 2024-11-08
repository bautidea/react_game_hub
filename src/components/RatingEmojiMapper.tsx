import { useState } from 'react';
import bullsEye from '../assets/Emojis/bulls-eye.webp';
import meh from '../assets/Emojis/meh.webp';
import stop from '../assets/Emojis/stop.png';
import thumbsUp from '../assets/Emojis/thumbs-up.webp';

export function RatingEmojiMapper({ rating }: { rating: number }) {
  // Setting hover properties.
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const getEmojiProps = () => {
    if (rating <= 2) {
      return { src: stop, alt: 'skip' };
    } else if (rating <= 3) {
      return { src: meh, alt: 'meh' };
    } else if (rating <= 4) {
      return { src: thumbsUp, alt: 'recommended' };
    } else if (rating <= 5) {
      return { src: bullsEye, alt: 'exceptional' };
    }
  };

  const imgProps = getEmojiProps();

  return (
    <img
      {...imgProps}
      width={'100%'}
      height={'100%'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={isHovered ? imgProps?.alt : ''}
    />
  );
}
