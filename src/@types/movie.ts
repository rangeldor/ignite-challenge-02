import IRating from './rating';

export default interface IMovie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<IRating>;
  Runtime: string;
}