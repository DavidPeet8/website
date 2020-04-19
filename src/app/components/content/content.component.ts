import { Component, OnInit} from '@angular/core';
import { ContentService } from '../../services/content.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  itemlist:Object;

  constructor(private contentService:ContentService) { }

  ngOnInit(): void {
  	this.itemlist = Object.values(this.contentService.getData(['work']));

    // Set up the spanner size
  }

}
