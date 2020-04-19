import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-bar',
  templateUrl: './tag-bar.component.html',
  styleUrls: ['./tag-bar.component.sass']
})
export class TagBarComponent implements OnInit {
  @Input() tags:string[];

  constructor() { }

  ngOnInit(): void {
  }

}
