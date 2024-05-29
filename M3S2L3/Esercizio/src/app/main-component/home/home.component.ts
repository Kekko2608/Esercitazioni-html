import { Component } from '@angular/core';
import { iProduct } from '../../modules/i-product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

productArr:iProduct[] = []

constructor(private productSvc:ProductService){}

ngOnInit(){
  this.productSvc.getAll().subscribe(products => {
    this.productArr = products
    console.log(this.productArr)
  })

}

addToCart(productId: number): void {
  this.productSvc.addToCart(productId);
}
}

