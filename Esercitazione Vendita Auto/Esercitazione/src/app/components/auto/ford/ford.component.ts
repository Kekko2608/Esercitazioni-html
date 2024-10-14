import { Component } from '@angular/core';
import { IAuto } from '../../../models/iAuto';
@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  autos!: IAuto[];
    brand!: string;
    brandLogo!: string

    ngOnInit(): void {
        this.getAutos();
    }

    async getAutos() {
        const res = await fetch('../../assets/db.json');
        const response = await res.json();
        this.autos = response;
        this.autos = this.autos.filter((auto) => auto.brand == 'Ford')
        this.brandLogo = this.autos[0].brandLogo;
        this.brand = this.autos[0].brand;
    }
}
