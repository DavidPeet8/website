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

  openGithub(): void
  {
  	window.open(this.config.links.github, "_blank");
  }

  openResume() 
  {
    window.open(this.config.resumePath, "_blank")
  }

}
