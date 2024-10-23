import { fetchGames } from './services/fetchGames';
import { useQuery } from '@tanstack/react-query';

interface Platform {
  id: number;
  name: string;
  slug: string;
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
  const {
    data: games,
    isLoading,
    isError,
  } = useQuery<Game[]>({ queryKey: ['games'], queryFn: fetchGames });

  console.log(games);

  return (
    <>
      <h1>HI</h1>
    </>
  );
}

export default App;
