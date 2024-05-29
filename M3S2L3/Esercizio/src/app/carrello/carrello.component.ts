import { Component, OnInit } from '@angular/core';
import { iProduct } from '../modules/i-product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.scss'
})
export class CarrelloComponent implements OnInit {

  carrelloArr: iProduct[] = [];

  constructor(private prodSvc: ProductService) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts(): void {
    this.prodSvc.getCart().subscribe(products => { // Modifica 'addToCart' in 'getCart'
      this.carrelloArr = products;
    });
  }
}
