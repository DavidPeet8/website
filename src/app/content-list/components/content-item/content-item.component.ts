import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.sass'],
  animations:
    [
      trigger('projectGrow', [
        state('big', style({
          transform: 'scale(1.05)',
          'background-color': '#111111',
          'backdrop-filter': 'blur(200px)'
        })),
        state('smol', style({
          transform: 'scale(1)',
          'background-color': '#222222',
          'backdrop-filter': 'blur(0px)'
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
  isBigContent: boolean = false;
  animated: boolean = window.innerWidth > 900 && window.innerHeight > 700

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {

  }

  getName(): string {
    return this.item.name;
  }

  getPosition(): string {
    return this.item.position;
  }

  getImg(): string {
    return this.item.imgPath;
  }

  onMouseEnterContainer(): void {
    if (this.isWork || !this.animated) return;
    this.isBigContent = true;
  }

  onMouseLeaveContainer(): void {
    if (this.isWork || !this.animated) return;
    this.isBigContent = false;
  }

  goToSite(): void {
    window.open(this.item.siteurl, "_blank");
  }

  getClasses(): Object {
    return {
      'flex-left': true,
      'content-item-container': true,
      'project-container': !this.isWork
    };
  }

  getSplashContent(): string {
    return this.item.content.splash;
  }

  getDate(): string {
    return this.item.dateRange;
  }

  getStyle(): Object {
    if (this.isWork) {
      return this.item.css;
    }
    return {
      'background-image': 'url("' + this.item.imgPath + '")',
      'background-size': 'cover',
      ...this.item.css
    };
  }

  shouldDisplaySeparator(): Object {
    let display = { 'display': 'none' }
    if (this.item.css.display != 'none' && this.item.index != 0) {
      display.display = 'block';
    }
    return display;
  }

}
