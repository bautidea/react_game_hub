import { IconType } from 'react-icons';
import { AiFillAndroid } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { FaApple, FaLinux, FaPlaystation, FaWindows } from 'react-icons/fa';
import { GiBlast, GiClaymoreExplosive } from 'react-icons/gi';
import { SiNintendo, SiSega } from 'react-icons/si';
import { TbTriangleSquareCircleFilled } from 'react-icons/tb';
import { ParentPlatforms } from '../../types';
import { Badge, Box, Tooltip } from '@mui/material';

interface Props {
  parentPlatforms: ParentPlatforms[];
}

export function PlatformMapper({ parentPlatforms }: Props) {
  const iconMapper: { [key: string]: IconType } = {
    'playstation': FaPlaystation,
    'pc': FaWindows,
    'android': AiFillAndroid,
    'mac': FaApple,
    'linux': FaLinux,
    'nintendo': SiNintendo,
    'commodore-amiga': GiClaymoreExplosive,
    'sega': SiSega,
    '3do': TbTriangleSquareCircleFilled,
    'neo-geo': GiBlast,
    'web': BsGlobe,
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        alignItems: 'center',
      }}
    >
      {parentPlatforms.map((platform) => {
        const Icon = iconMapper[platform.slug];

        return (
          Icon && (
            <Tooltip key={platform.slug} title={platform.name}>
              <Badge>
                <Icon size={'25px'} />
              </Badge>
            </Tooltip>
          )
        );
      })}
    </Box>
  );
}
