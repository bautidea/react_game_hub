import { Box } from '@mui/material';
import logo from '../../assets/logo/logo.webp';

export function Nav() {
  return (
    <Box
      sx={{
        height: '6rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '15px',
          marginLeft: '40px',
        }}
      >
        <img
          src={logo}
          alt="web logo"
          style={{ width: '64px', height: 'auto', objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
}
