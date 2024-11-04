import { Grid2 } from '@mui/material';
import { Nav } from './components/Nav';
import { Aside } from './components/Aside';
import { Main } from './components/Main';

function App() {
  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Nav />
      </Grid2>
      <Grid2
        size={{ xs: 0, md: 2 }}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <Aside />
      </Grid2>
      <Grid2
        size={{ xs: 12, md: 10 }}
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Main />
      </Grid2>
    </Grid2>
  );
}

export default App;
