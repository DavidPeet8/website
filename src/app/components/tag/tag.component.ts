import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.sass']
})
export class TagComponent implements OnInit {
	@Input() tagModel:string;

  constructor() { }

  ngOnInit(): void {
  }

}
