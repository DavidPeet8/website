import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentItemComponent } from '@content-list/components/content-item/content-item.component'
import { ContentComponent } from '@content-list/components/content/content.component'
import { ModalComponent } from '@content-modal/components/modal/modal.component'

const routes: Routes = [
	{ path: 'website', component: ModalComponent },
	{ path: 'memcheck', component: ModalComponent },
	{ path: 'banking-payment-tracker', component: ModalComponent },
	{ path: 'git-branch-hierarchy', component: ModalComponent },
	{ path: 'highlight-sites', component: ModalComponent },
	{ path: 'new-tab-page', component: ModalComponent },
	{ path: 'terraria', component: ModalComponent },
	{ path: 'line-bot', component: ModalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentListRoutingModule { }
