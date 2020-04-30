import { Component, OnInit } from '@angular/core';
import { ContentService } from '@shared/services/content.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
	data;
  headerText:string[] = ['Developer.', 'Athlete.', 'Architect.'];
  typewriterText:string;
  headerTextWordIdx:number = 0;
  headerTextIdx:number = 0;

  constructor(private contentService: ContentService) {
    this._typingCallBack = this._typingCallBack.bind(this);
  }

  ngOnInit(): void {
  	this.data = this.contentService.getData(['header']);
    this._typingCallBack();
  }

  getBackgroundImg() : Object
  {
  	return {
  		'background-image': this.data.imgPath
  	};
  }

  _typingCallBack() : void 
  {
    let timeoutConstant: number = 0;

    this.headerTextIdx++;
    if (this.headerTextIdx == this.headerText[this.headerTextWordIdx].length) 
    {
      this.headerTextIdx = 0;
      this.headerTextWordIdx++;
    }
    if (this.headerTextWordIdx == this.headerText.length) 
    {
      this.headerTextWordIdx = 0;
    }
    if(this.headerTextIdx == this.headerText[this.headerTextWordIdx].length - 1)
    { 
      timeoutConstant = 1000; 
    }

    this.typewriterText = this.headerText[this.headerTextWordIdx].slice(0, this.headerTextIdx + 1);
    setTimeout(this._typingCallBack, Math.random() * 180 + 100 + timeoutConstant, this);
  }

}
