export interface ParentPlatforms {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: Date;
  background_image: string;
  rating: number;
  parent_platforms: { platform: ParentPlatforms }[];
}
