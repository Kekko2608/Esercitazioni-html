import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective implements OnInit {

      @Input() colore: string = '';

      constructor(private ref: ElementRef) { }

      ngOnInit() {
        console.log(this.ref.nativeElement);

        if (!this.colore) {
          this.colore = this.getRandomColor();
        }

        this.ref.nativeElement.style.backgroundColor = this.colore;
      }

      private getRandomColor(): string {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    }


