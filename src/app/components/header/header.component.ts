import { Component, OnInit } from '@angular/core';
import { ContentService } from '@shared/services/content.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
	data;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  	this.data = this.contentService.getData(['header']);
  }

  getBackgroundImg() : Object
  {
  	return {
  		'background-image': this.data.imgPath
  	};
  }

}
