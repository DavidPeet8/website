import { Component, OnInit} from '@angular/core';
import {ContentItem} from '../../models/contentItem'
import {WorkItem} from '../../models/workplace'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
	itemlist:ContentItem[]

  constructor() { }

  ngOnInit(): void {
  	this.itemlist = [
  		new WorkItem(".", ".").setData("BOO", "COO", "FOO", "MOO"),
  		new WorkItem(".", "")
  	]
  }

}
