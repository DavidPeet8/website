import { Component, OnInit } from '@angular/core';
import { About } from '../../models/About';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
	about = About;

  constructor() { 

  }

  ngOnInit(): void {
  	
  }

}
