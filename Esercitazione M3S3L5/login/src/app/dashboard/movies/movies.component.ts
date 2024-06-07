import { Component } from '@angular/core';
import { iMovies } from '../../models/movies';
import { AuthService } from '../../auth/auth.service';
import { MoviesService } from '../../services/movies.service';
import { iUser } from '../../models/user';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  movies:iMovies[]= [];

  constructor(private authSvc:AuthService, private moviesSvc:MoviesService){}

  user:iUser|undefined;

  ngOnInit(){

    this.authSvc.user$.subscribe(user => {
      this.user = user || undefined;
    })

    this.moviesSvc.getAllMovies();

    this.moviesSvc.movies$.subscribe(
      movies => {
        this.movies = movies;
      });
  }
  addToFavs(prd:iMovies) {
    this.moviesSvc.addToFav(prd)
  }
  isFav(id:number) {
    return this.moviesSvc.isFav(id)
  }

  deleteMovie(id: number) {
    this.moviesSvc.deleteMovie(id);
  }
}
