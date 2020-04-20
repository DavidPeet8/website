import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router' 
import { ContentService } from '@shared/services/content.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  workList:Object;
  projectList:Object;
  isWork:boolean = true; // Used to toggle between work and projects

  constructor(private contentService:ContentService, private router:Router) { }

  ngOnInit(): void {
  	this.workList = Object.values(this.contentService.getData(['work']));
    this.projectList = Object.values(this.contentService.getData(['projects']));

    this.isWork = (this.router.url === '/experience')
    // Set up the spanner size
  }

}
