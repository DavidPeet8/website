import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.sass']
})
export class TagComponent implements OnInit {
	@Input() tagModel:string;
	@Input() css;

  constructor() { }

  ngOnInit(): void {
  }

  getStyle() : Object
  {
  	return {
  		'color': this.css.color,
  		'border': '2px solid ' + this.css.color,
  		'background': 'transparent'
  	};
  }

}
