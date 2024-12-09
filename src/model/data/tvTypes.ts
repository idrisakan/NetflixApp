interface Tv {
  overview: string;
  title: string;
  release_date: string;
  popularity: number;
  poster_path: string;
  orginal_title: string;
}
interface TvTypes {
  pending: boolean;
  topRateTv: Tv[];
  populerTv: Tv[];
  tvDetailData:object
}

export type {TvTypes, Tv};
