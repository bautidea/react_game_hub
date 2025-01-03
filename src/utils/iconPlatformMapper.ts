import { IconType } from 'react-icons';
import { AiFillAndroid } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import {
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { GiBlast, GiClaymoreExplosive } from 'react-icons/gi';
import { SiNintendo, SiSega } from 'react-icons/si';
import { TbTriangleSquareCircleFilled } from 'react-icons/tb';
import { SiAtari } from 'react-icons/si';

export const iconMapper: { [key: string]: IconType } = {
  'playstation': FaPlaystation,
  'xbox': FaXbox,
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
  'ios': FaApple,
  'atari': SiAtari,
};
