import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentListRoutingModule } from './content-list-routing.module';
import { TagBarComponent } from './components/tag-bar/tag-bar.component';
import { TagComponent } from './components/tag/tag.component';
import { ContentComponent } from './components/content/content.component';
import { ContentItemComponent } from './components/content-item/content-item.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ContentComponent,
    ContentItemComponent,
    TagComponent,
    TagBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContentListRoutingModule,
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentListModule { }
