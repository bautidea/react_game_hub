import { Grid2 } from '@mui/material';
import { fetchGames } from './services/fetchGames';
import { useQuery } from '@tanstack/react-query';
import { Nav } from './components/Nav';
import { Aside } from './components/Aside';
import { Main } from './components/Main';

interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface Game {
  id: number;
  slug: string;
  name: string;
  released: Date;
  background_image: string;
  rating: number;
  platforms: { platform: Platform }[];
}
function App() {
  // const {
  //   data: games,
  //   isLoading,
  //   isError,
  // } = useQuery<Game[]>({ queryKey: ['games'], queryFn: fetchGames });

  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Nav />
      </Grid2>
      <Grid2
        size={{ xs: 0, md: 4 }}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <Aside />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 8 }}>
        <Main />
      </Grid2>
    </Grid2>
  );
}

export default App;
