import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { iProduct } from './modules/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  apiUrl:string = "https://dummyjson.com/products"

  constructor(private http:HttpClient) { }


  getAll(): Observable<iProduct[]> {
    return this.http.get<{ products: iProduct[] }>(this.apiUrl)
      .pipe(map(response => response.products));
  }


}
