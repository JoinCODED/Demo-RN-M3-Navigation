import { makeAutoObservable, observable } from 'mobx';
import movies from '../data';
class MoviesStore {
  constructor() {
    makeAutoObservable(this);
  }
  movies = movies;

  getMovies = () => {
    return this.movies;
  };

  getMovieById = (id) => {
    return this.movies.find((movie) => movie.id === id);
  };
}

export default new MoviesStore();
