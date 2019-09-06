import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public moviesservice: MoviesService
  ) { }

  moviesLijstNaam = []
  moviesLijstSort = []
  film 
  movies

  ngOnInit(){
    console.log(this.moviesservice.getAllMovies())
  }

  findMoviesNaam(){
    this.moviesLijstNaam = this.moviesservice.getMoviesNaam(this.film)
  }

  findAllMoviesSort(){
    this.moviesLijstSort = this.moviesservice.getAllMovies();
    this.moviesLijstSort.sort((a, b) => a.film > b.film ? 1 : -1);
  }
}
