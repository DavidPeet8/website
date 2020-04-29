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
  	console.log("Modal has been initialized");
  	console.log(this.contentService.getForContext());
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
  	return this.item.modalContent.imgSrc;
  }

  getProject() 
  {
  	return this.item.name;
  }

  getDescription()
  {
  	return this.item.modalContent.description;
  }

  getImprovements () 
  {
  	return this.item.modalContent.improvements;
  }

}
