import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { iMovies } from '../models/movies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesUrl = "http://localhost:3000/movies-popular";

  private fav: iMovies[] = this.getFavsFromLocalStorage();
  private favSubject: BehaviorSubject<iMovies[]> = new BehaviorSubject(this.fav);

  constructor(private http: HttpClient) { }

  private mov = new BehaviorSubject<iMovies[]>([]);
  movies$ = this.mov.asObservable();

  getAllMovies() {
    return this.http.get<iMovies[]>(this.moviesUrl)
      .subscribe(movies => this.mov.next(movies));
  }

  addMovie(movie: iMovies) {
    return this.http.post<iMovies>(this.moviesUrl, movie)
      .subscribe(newMovie => {
        this.getAllMovies();
      });
  }

  deleteMovie(id: number) {
    return this.http.delete(`${this.moviesUrl}/${id}`)
      .subscribe(() => {
        this.getAllMovies();
      });
  }

  private getFavsFromLocalStorage(): iMovies[] {
    const favs = localStorage.getItem('favourites');
    return favs ? JSON.parse(favs) : [];
  }

  private updateLocalStorage() {
    localStorage.setItem('favourites', JSON.stringify(this.fav));
  }

  addToFav(prod: iMovies) {
    const movie = this.fav.find(mov => mov.id === prod.id);
    if (!movie) {
      this.fav.push(prod);
      this.updateLocalStorage();
      this.favSubject.next(this.fav);
    }
  }

  removeFromFav(id: number) {
    const index = this.fav.findIndex(el => el.id === id);
    if (index !== -1) {
      this.fav.splice(index, 1);
      this.updateLocalStorage();
      this.favSubject.next(this.fav);
    }
  }

  get favList(): Observable<iMovies[]> {
    return this.favSubject.asObservable();
  }

  isFav(id: number) {
    return this.fav.find(prd => prd.id === id);
  }
}
