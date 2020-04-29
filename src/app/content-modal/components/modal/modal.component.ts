import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '@shared/services/content.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  constructor(private router: Router, private contentService: ContentService) { }

  ngOnInit(): void {
  	console.log("Modal has been initialized");
  }

  closeModal() {
  	console.log("Modal Closed");
  	this.router.navigate(['projects']);

  }

  stopPropagation(event) {
  	event.stopPropagation();
  }

}
