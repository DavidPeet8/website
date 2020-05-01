import { Component, OnInit } from '@angular/core';
import { ContentService } from '@shared/services/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  data;
  config;

  constructor(private contentService:ContentService) {
    this.data = contentService.getData(['about']);
    this.config = contentService.getData(['config']);
  }

  ngOnInit(): void {}

  getLinkedIn() : string
  {
    return this.config.links.linkedIn;
  }

  getEmail() : string
  {
    return "mailto:" + this.config.links.email
  }

  openGithub(): void
  {
  	window.open(this.config.links.github, "_blank");
  }

  openResume() 
  {
    window.open(this.config.resumePath, "_blank")
  }

}
