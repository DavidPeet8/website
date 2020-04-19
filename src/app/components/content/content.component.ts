import { Component, OnInit} from '@angular/core';
import { ContentService } from '../../services/content.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  workList:Object;
  projectList:Object;
  isWork:boolean = true;

  constructor(private contentService:ContentService) { }

  ngOnInit(): void {
  	this.workList = Object.values(this.contentService.getData(['work']));
    this.projectList = Object.values(this.contentService.getData(['projects']));

    // Set up the spanner size
  }

}
