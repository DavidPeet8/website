import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.sass'],
  animations: 
  [
    trigger('grow', [
      state('mouseIn', style({
        transform: 'scale(1.15)'
      })),
      state('mouseOut', style({
        transform: 'scale(1)'
      })),
      transition('mouseOut => mouseIn', [
        animate('0.05s')
      ]),
      transition('mouseIn => mouseOut', [
        animate('0.05s')
      ])
    ])
  ]
})
export class ContentItemComponent implements OnInit {
  @Input() item; // do not statically type to allow polymorphism
  isbig: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  getPrimary(): string
  {
  	return this.item.name;
  }

  getSecondary(): string
  {
    return this.item.position;
  }

  getImg() : string 
  {
  	return this.item.imgPath;
  }

  getBullets():string[]
  {
    return this.item.content;
  }

  onMouseEnter(): void
  {
    console.log("Mouse Enter triggered");
    this.isbig = true;
  }

  onMouseLeave(): void
  {
    console.log("Mouse Leave Triggered");
    this.isbig = false;
  }

  goToSite(): void
  {
    window.open("https://google.com", "_blank");
  }

}
