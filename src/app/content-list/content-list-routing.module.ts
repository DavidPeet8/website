import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentItemComponent } from '@content-list/components/content-item/content-item.component'


const routes: Routes = [
	{ path: 'projects/website', component: ContentItemComponent },
	{ path: 'projects/memcheck', component: ContentItemComponent },
	{ path: 'projects/banking-payment-tracker', component: ContentItemComponent },
	{ path: 'projects/git-branch-parent-tracker', component: ContentItemComponent },
	{ path: 'projects/highlight-sights', component: ContentItemComponent },
	{ path: 'projects/new-tab-page', component: ContentItemComponent },
	{ path: 'projects/terraria', component: ContentItemComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentListRoutingModule { }
