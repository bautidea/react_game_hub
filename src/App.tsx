import { Box, Grid2 } from '@mui/material';
import { Nav } from './components/Nav/Nav';
import { Main } from './components/gameGrid/Main';
import { useGameQuery } from './hooks/useGameQuery';
import { Aside } from './components/Aside/Aside';
import { useState } from 'react';
import { useViewPortWidth } from './utils/useViewPortWidth';

function App() {
  const [sideBarVisible, setSideBarVisible] = useState<boolean>(false);
  const { viewportWidth } = useViewPortWidth();
  const isMobile = viewportWidth < 1175 ? true : false;

  const {
    gameQuery,
    handleGenreSelect,
    handlePlatformSelect,
    handleOrderSelect,
    handleSearchBarQuery,
  } = useGameQuery();

  function handleIconSideBarClick() {
    setSideBarVisible((prevValue) => !prevValue);
  }

  const AsideComponent = (
    <Aside
      handleGenreSelect={handleGenreSelect}
      handlePlatformSelect={handlePlatformSelect}
      gameQuery={gameQuery}
      isMobile={isMobile}
    />
  );

  return (
    <Box sx={{ position: 'relative' }}>
      <Grid2 container>
        <Grid2 size={12}>
          <Nav
            sideBarVisible={sideBarVisible}
            handleSearchBarQuery={handleSearchBarQuery}
            handleIconSideBarClick={handleIconSideBarClick}
          />
        </Grid2>

        <Grid2
          size={{ xs: 0, md: 2.3 }}
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          {AsideComponent}
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
            isMobile={isMobile}
          />
        </Grid2>
      </Grid2>

      {sideBarVisible && (
        <Box
          sx={{
            display: {
              xs: 'visible',
              md: 'none',
            },
            backgroundColor: 'white',
            width: '40%',
            maxHeight: '800px',
            position: 'absolute',
            top: '34px',
            right: '65px',
            paddingTop: '10px',
            paddingRight: '10px',
            zIndex: 2,
            overflow: 'auto',
            borderRadius: '20px',
            // clipPath: 'inset(0 round 20px)',
          }}
        >
          {AsideComponent}
        </Box>
      )}
    </Box>
  );
}

export default App;
