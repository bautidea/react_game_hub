import { Badge } from '@mui/material';

interface Props {
  criticScore: number;
}

export function CriticScore({ criticScore }: Props) {
  const color = !criticScore
    ? 'transparent'
    : criticScore < 35
    ? 'orange'
    : criticScore < 60
    ? 'yellow'
    : 'green';

  return (
    <Badge
      sx={{
        backgroundColor: `${color}`,
        padding: '5px 10px',
        borderRadius: '10px',
        opacity: '0.8',
      }}
    >
      {criticScore}
    </Badge>
  );
}
