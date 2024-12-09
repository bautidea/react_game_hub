import { Grid2 } from '@mui/material';
import { Nav } from './components/Nav/Nav';
import { Main } from './components/gameGrid/Main';
import { useGameQuery } from './hooks/useGameQuery';
import { Aside } from './components/Aside/Aside';

function App() {
  const {
    gameQuery,
    handleGenreSelect,
    handlePlatformSelect,
    handleOrderSelect,
  } = useGameQuery();
  console.log(gameQuery);

  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Nav />
      </Grid2>

      <Grid2
        size={{ xs: 0, md: 2.3 }}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <Aside
          handleGenreSelect={handleGenreSelect}
          handlePlatformSelect={handlePlatformSelect}
        />
      </Grid2>

      <Grid2
        size={{ xs: 12, md: 9.7 }}
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Main
          gameQuery={gameQuery}
          handleGenreSelect={handleGenreSelect}
          handleOrderSelect={handleOrderSelect}
        />
      </Grid2>
    </Grid2>
  );
}

export default App;
