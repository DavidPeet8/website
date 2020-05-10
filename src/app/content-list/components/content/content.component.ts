import { Component, OnInit, Input} from '@angular/core';
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
  @Input() isWork:boolean; // Used to toggle between work and projects

  constructor(private contentService:ContentService, private router:Router) { }

  ngOnInit(): void {
  	this.workList = Object.values(this.contentService.getData(['experience']));
    this.projectList = Object.values(this.contentService.getData(['projects']));
    // Set up the spanner size
  }

}
