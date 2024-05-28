import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective implements OnInit {

  @Input() colore: string = '';

  constructor(private ref: ElementRef) { }

  ngOnInit() {
    console.log(this.ref.nativeElement); // Log the DOM element to which the directive is attached

    if (!this.colore) {
      this.colore = this.getRandomColor(); // Generate a random color if no color is provided
    }

    this.ref.nativeElement.style.color = this.colore; // Apply the color to the element
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

