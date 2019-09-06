import { Injectable } from '@angular/core';
import doc from '../movies.json'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  moviesLijst = []

  getAllMovies() {
    return doc;
  }

  getMoviesNaam(str) {
    this.moviesLijst = []
    let movies = this.getAllMovies()
    for (let movie of movies) {
      if (movie.film.toLowerCase() === str.toLowerCase() )
        this.moviesLijst.push(movie)
    }
    this.moviesLijst.sort((a, b) => a.film - b.film);
    return this.moviesLijst
  }

}
