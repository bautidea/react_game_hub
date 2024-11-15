export interface ParentPlatforms {
  id: number;
  name: string;
  slug: string;
}

export interface Genres {
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
  genres: Genres[];
}

export interface GameQuery {
  selectedIdGenre: number | null;
  selectedOrder: string | null;
}
