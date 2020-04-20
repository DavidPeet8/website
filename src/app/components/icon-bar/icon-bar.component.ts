import { Component, OnInit } from '@angular/core';
import { ContentService } from '@shared/services/content.service'

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.sass']
})
export class IconBarComponent implements OnInit {
  data:Object;
  constructor(private contentService:ContentService) { }

  ngOnInit(): void {
    this.data = this.contentService.getData(['config'])
  }

  onElementClicked(str): void 
  {
  	switch(str)
  	{
  		case 'github':
  			window.open(this.data['links']['github'], "_blank");
  			break;
  		case 'linkedin':
  			window.open(this.data['links']['linkedIn'], "_blank");
  			break;
  		case 'phone':
  			// Idk try to open a default phone app?
  			console.log("phone clicked");
  			break;
  		case 'email':
  			// Idk go to their mail provider
  			console.log("Email clicked");
  			break;
  		default:
  			console.log("This button has not been implemented");
  			break;
  	}
  }

}
