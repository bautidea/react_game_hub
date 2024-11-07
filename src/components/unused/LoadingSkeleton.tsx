import { Box, Grid2 } from '@mui/material';
import { useViewPortWidth } from '../../hooks/useViewPortWidth';

export function LoadingSkeleton({
  numberOfSkeletons,
}: {
  numberOfSkeletons: number;
}) {
  const skeletonArray = [...Array(numberOfSkeletons).keys()];

  const { ViewportWidth } = useViewPortWidth();

  const skeletonWidth =
    ViewportWidth >= 1535
      ? '18vw'
      : ViewportWidth >= 1200
      ? '25vw'
      : ViewportWidth >= 900
      ? '30vh'
      : '500px';

  return (
    <>
      {skeletonArray.map((skInd) => (
        <Grid2
          key={skInd}
          size={{ xs: 12, md: 6, lg: 4, xl: 3 }}
          sx={{
            justifyItems: 'center',
          }}
        >
          <Box
            sx={{
              height: '28rem',
              width: `${skeletonWidth}`,
              borderRadius: '15px',
              backgroundColor: '#212529',
              border: '1px #4a4e69 solid',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span className="loader"></span>
          </Box>
        </Grid2>
      ))}
    </>
  );
}
