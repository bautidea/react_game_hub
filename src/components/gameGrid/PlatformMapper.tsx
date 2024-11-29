import { ParentPlatforms } from '../../types';
import { Badge, Box, Tooltip } from '@mui/material';
import { iconMapper } from '../../utils/iconPlatformMapper';

interface Props {
  parentPlatforms: ParentPlatforms[];
}

export function PlatformMapper({ parentPlatforms }: Props) {
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
