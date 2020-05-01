import { Component, OnInit } from '@angular/core';
import { ContentService } from '@shared/services/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  data;

  constructor(private contentService:ContentService) { }

  ngOnInit(): void {
  	this.data = this.contentService.getData(['config']);
  }

  getGithubURL()
  {
  	return this.data.links.github;
  }

}
