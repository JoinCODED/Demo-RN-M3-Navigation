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
}

export default new MoviesStore();
