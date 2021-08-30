import IMovie from './movie';
import IGenre from './genre';

export default interface IContent {
  selectedGenre: IGenre
  movies: Array<IMovie>
}