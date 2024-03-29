import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ContentService } from '@shared/services/content.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  item;

  constructor(private router: Router, private contentService: ContentService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.item = this.contentService.getProjectForContext();
  }

  closeModal() {
    this.router.navigate(['']); // Navigate back
  }

  stopPropagation(event) {
    // Prevent parent element from being clicked
    event.stopPropagation();
  }

  getImg() {
    let src = (this.item.modalContent.imgSrc == "") ? this.item.imgPath : this.item.modalContent.imgSrc;
    console.log(src);
    return {
      'background-image': 'url(' + src + ')'
    };
  }

  getProject(): string {
    return this.item.name;
  }

  getDetails(): SafeHtml {
    return this.item.modalContent.details;
  }

  hasDetails(): boolean {
    return this.item.modalContent.details.length > 0;
  }

  getImprovements(): string {
    return this.item.modalContent.improvements;
  }

  getDate(): string {
    return this.item.dateRange;
  }

  getTags(): string {
    return this.item.tags.join("  \u2022  ");
  }

  getDescription(): string {
    return this.item.modalContent.description;
  }

  getSlides(): string[] {
    let src = (this.item.modalContent.imgSrc == '') ?
      (this.item.imgPath == "" ? [] : [this.item.imgPath]) :
      this.item.modalContent.imgSrc;
    return src;
  }

  getGithub(): string {
    return this.item.githuburl;
  }

  openSite(): void {
    window.open(this.item.githuburl, "_blank");
  }

  openSiteLink(): void {
    window.open(this.item.siteurl, "_blank");
  }

  getSite(): string {
    return this.item.siteurl;
  }
}
