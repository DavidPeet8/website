import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentItemComponent } from '@content-list/components/content-item/content-item.component'
import { ContentComponent } from '@content-list/components/content/content.component'
import { ModalComponent } from '@content-modal/components/modal/modal.component'

const routes: Routes = [
	{ path: 'website', component: ModalComponent },
	{ path: 'memory-sanitizer', component: ModalComponent },
	{ path: 'payment-tracker', component: ModalComponent },
	{ path: 'branch-visualizer', component: ModalComponent },
	{ path: 'site-spotlight', component: ModalComponent },
	{ path: 'gravitate', component: ModalComponent },
	{ path: 'beautiful-newtab', component: ModalComponent },
	{ path: 'terraria', component: ModalComponent },
	{ path: 'line-bot', component: ModalComponent },
	{ path: 'deadline', component: ModalComponent },
	{ path: 'note-modules', component: ModalComponent },
	{ path: 'binary-io', component: ModalComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ContentListRoutingModule { }
