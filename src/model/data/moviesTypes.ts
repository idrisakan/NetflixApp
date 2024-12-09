interface Movie {
  overview: string;
  title: string;
  release_date: string;
  popularity: number;
  poster_path: string;
  orginal_title: string;
  id:number
}
interface MoviesTypes {
  pending: boolean;
  topRateMovies: Movie[];
  populerMovies: Movie[];
  movieDetailData: object;
}

export type {MoviesTypes, Movie};
