import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { iProduct } from './modules/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cart: number[] = [];
  apiUrl:string = "https://dummyjson.com/products"

  constructor(private http:HttpClient) { }


  getAll(): Observable<iProduct[]> {
    return this.http.get<{ products: iProduct[] }>(this.apiUrl)
      .pipe(map(response => response.products));
  }

  addToCart(productId: number): void {
    if (!this.cart.includes(productId)) {
      this.cart.push(productId);
    }
  }

  getCart(): Observable<iProduct[]> {
    const cartIds = this.cart.join(',');
    const url = `${this.apiUrl}/cart?ids=${cartIds}`;

    return this.http.get<iProduct[]>(url);
  }


}
