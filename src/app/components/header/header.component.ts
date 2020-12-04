import { Component, OnInit } from '@angular/core';
import { ContentService } from '@shared/services/content.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  data;
  headerText: string;
  expression: string;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.data = this.contentService.getData(['header']);

    let rand = Math.floor(Math.random() * this.data.headers.length);
    this.headerText = this.data.headers[rand];

    rand = Math.floor(Math.random() * this.data.expressions.length);
    this.expression = this.data.expressions[rand];
  }

  getBackgroundImg(): Object {
    return {
      'background-image': this.data.imgPath
    };
  }

  getExpression(): string {
    return this.expression;
  }
}
