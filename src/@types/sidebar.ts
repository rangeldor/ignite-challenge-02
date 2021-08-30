import IGenre from './genre';

export default interface ISideBar {
  genres: Array<IGenre>,
  selectedGenreId: number,
  handleClickButton: (id: number) => void
}