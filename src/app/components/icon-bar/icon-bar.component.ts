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
  			// Try to place a call if possible
        window.location.href= this.data['links']['phone'];
  			console.log("phone clicked");
  			break;
  		case 'email':
  			// Open default mail provider and address to me
        window.location.href = "mailto:" + this.data['links']['email'] + "?body=I%20saw%20your%20website!";
  			console.log("Email clicked");
  			break;
  		default:
  			console.log("This button has not been implemented");
  			break;
  	}
  }

  hasPhone(): boolean
  {
    return this.data['links']['phone'] != '';
  }

  hasGithub(): boolean
  {
    return this.data['links']['github'] != '';
  }

  hasEmail(): boolean
  {
    return this.data['links']['email'] != '';
  }

  hasLinkedIn(): boolean
  {
    return this.data['links']['linkedIn'] != '';
  }

}
