import { Component, OnInit, Input } from '@angular/core';
import { ContentItem } from '../../models/contentItem';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.sass']
})
export class ContentItemComponent implements OnInit {
  @Input() item:ContentItem;

  constructor() { }

  ngOnInit(): void {
  }

}
