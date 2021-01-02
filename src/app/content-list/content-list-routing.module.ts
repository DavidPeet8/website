import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

function loadModal() {
	console.log("Something was loaded");
	return import('@content-modal/content-modal.module').then(m => m.ContentModalModule);
}

const routes: Routes = [
	{ path: 'website', loadChildren: loadModal },
	{ path: 'memory-sanitizer', loadChildren: loadModal },
	{ path: 'payment-tracker', loadChildren: loadModal },
	{ path: 'branch-visualizer', loadChildren: loadModal },
	{ path: 'site-spotlight', loadChildren: loadModal },
	{ path: 'gravitate', loadChildren: loadModal },
	{ path: 'beautiful-newtab', loadChildren: loadModal },
	{ path: 'terraria', loadChildren: loadModal },
	{ path: 'line-bot', loadChildren: loadModal },
	{ path: 'deadline', loadChildren: loadModal },
	{ path: 'note-modules', loadChildren: loadModal },
	{ path: 'binary-io', loadChildren: loadModal }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ContentListRoutingModule { }
