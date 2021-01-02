import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from '@content-modal/components/modal/modal.component'

const routes: Routes = [
  { path: '', component: ModalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentModalRoutingModule { }
