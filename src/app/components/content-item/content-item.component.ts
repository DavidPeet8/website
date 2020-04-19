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
        transform: 'scale(1.05)'
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
    ]),

    trigger('projectGrow', [
      state('big', style({
        transform: 'scale(1.05)'
        // shade background
      })),
      state('smol', style({
        transform: 'scale(1)'
      })),
      transition('smol => big', [
        animate('0.1s')
      ]),
      transition('big => smol', [
        animate('0.1s')
      ]) 
    ])
  ]
})
export class ContentItemComponent implements OnInit {
  @Input() item; // do not statically type to allow polymorphism
  @Input() isWork: boolean;
  isBigImg: boolean = false;
  isBigContent: boolean = false;
  animated:boolean = window.innerWidth > 900 && window.innerHeight > 700

  constructor() { }

  ngOnInit(): void {}

  getPrimary(): string
  {
  	return this.item.name;
  }

  getSecondary(): string
  {
    return (this.item.position ? " - " + this.item.position : "");
  }

  getImg() : string 
  {
  	return this.item.imgPath;
  }

  getBullets():string[]
  {
    return this.item.content;
  }

  onMouseEnterImg(): void
  {
    if (!this.isWork || !this.animated) return;
    console.log("Mouse Enter Img Triggered");
    this.isBigImg = true;
  }

  onMouseEnterContainer()
  {
    if(this.isWork || !this.animated) return;
    console.log("Mouse Enter Container Triggered")
    this.isBigContent=true;
  }

  onMouseLeaveImg(): void
  {
    if (!this.isWork || !this.animated) return;
    console.log("Mouse Leave Img Triggered");
    this.isBigImg = false;
  }

  onMouseLeaveContainer() 
  {
    if (this.isWork || !this.animated) return;
    console.log("Mouse Leave Container Triggered")
    this.isBigContent = false;
  }

  goToSite(): void
  {
    window.open("https://google.com", "_blank");
  }

  getClasses() 
  {
    return {
      'flex-left': true,
      'content-item-container': true,
      'project-container': !this.isWork
    }; 
  }

  getContent(): string
  {
    return this.item.content;
  }

  getStyle(): Object 
  {
    if (this.isWork) 
    {
      return {};
    }
    return  {
      'background': 'url("' + this.item.imgPath + '")',
      'background-size': 'cover'
    };
  }

}