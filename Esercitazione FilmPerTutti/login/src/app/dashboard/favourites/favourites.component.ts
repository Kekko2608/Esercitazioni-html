import { Component } from '@angular/core';
import { iMovies } from '../../models/movies';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {

  favs!: iMovies[]

  constructor(public prdSrv: MoviesService) {}

  ngOnInit(): void {
    this.prdSrv.favList.subscribe((favs:iMovies[]) => {
      this.favs = favs
    })
  }
  removeFromFav(id:number) {
    this.prdSrv.removeFromFav(id)
  }
}
