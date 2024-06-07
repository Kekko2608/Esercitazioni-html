import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { iMovies } from '../../models/movies';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrl: './new-film.component.scss'
})
export class NewFilmComponent {
  movies: iMovies[] = [];
  newMovie: iMovies = {
    id: 0,
    title: '',
    description: '',
    image: '',
    duration: '',
    rating: 0
  };

  constructor(private moviesSvc: MoviesService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.moviesSvc.getAllMovies();
    this.moviesSvc.movies$.subscribe(movies => {
      this.movies = movies;
    });
  }

  addMovie() {
    this.moviesSvc.addMovie(this.newMovie);
    this.newMovie = {
      id: 0,
      title: '',
      description: '',
      image: '',
      duration: '',
      rating: 0
    };
  }
}
