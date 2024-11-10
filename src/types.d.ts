export interface ParentPlatforms {
  id: number;
  name: string;
  slug: string;
}

export interface genres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  metacritic: number;
  parent_platforms: { platform: ParentPlatforms }[];
  genres: genres[];
}

interface selectedGenre {
  id: number;
  slug: string;
}

export interface GameQuery {
  selectedGenre: selectedGenre | null;
}
