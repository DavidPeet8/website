import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '@shared/services/content.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit 
{
  item;

  constructor(private router: Router, private contentService: ContentService) { }

  ngOnInit(): void 
  {
  	this.item = this.contentService.getForContext();
  }

  closeModal() 
  {
  	console.log("Modal Closed");
  	this.router.navigate(['projects']); // Navigate back
  }

  stopPropagation(event) 
  {
  	// Prevent parent element from being clicked
  	event.stopPropagation();
  }

  getImg() 
  {
  	let src = (this.item.modalContent.imgSrc == "") ? this.item.imgPath : this.item.modalContent.imgSrc;
  	console.log(src);
  	return {
  		'background-image': 'url(' + src + ')'
  	};
  }

  getProject() 
  {
  	return this.item.name;
  }

  getDetails()
  {
  	return this.item.modalContent.details;
  }

  getImprovements () 
  {
  	return this.item.modalContent.improvements;
  }

  getDate() 
  {
  	return this.item.dateRange;
  }

  getDescription() 
  {
  	return this.item.modalContent.description
  }

}
