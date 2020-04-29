import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
})
export class CarouselComponent implements OnInit {
  @Input() slides: string[];
  slideIndex: number = 0;
  carouselBackground:Object = {
    'background-image': 'url(' + '' + ')'
  };

  constructor() { }

  ngOnInit(): void {
  	console.log("Carousel init");
    this.carouselBackground['background-image'] = 'url(' + this.slides[this.slideIndex] + ')';
  }

  showNext () : void 
  {
  	this.slideIndex++;
  	if (this.slideIndex == this.slides.length) this.slideIndex = 0;
    console.log('next');
    this.getBackground();
  }

  showPrev () : void
  {
  	this.slideIndex--;
  	if (this.slideIndex < 0) this.slideIndex = this.slides.length - 1;
    console.log('prev');
    this.getBackground();
  }

  getBackground() 
  {
    console.log("Changing background");
  	this.carouselBackground['background-image'] = 'url(' + this.slides[this.slideIndex] + ')';
  }

}
