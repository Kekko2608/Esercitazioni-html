import { Component } from '@angular/core';
import { iMovies } from '../models/movies';
import { AuthService } from '../auth/auth.service';
import { MoviesService } from '../services/movies.service';
import { iUser } from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
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
}
