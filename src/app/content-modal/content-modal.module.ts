import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { SharedModule } from '@shared/shared.module';
import { ContentModalRoutingModule } from './content-modal-routing.module';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContentModalRoutingModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ContentModalModule { }
