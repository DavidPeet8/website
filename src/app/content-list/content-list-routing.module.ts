import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentItemComponent } from '@content-list/components/content-item/content-item.component'


const routes: Routes = [
	{ path: 'projects/website', component: ContentItemComponent },
	{ path: 'projects/memcheck', component: ContentItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentListRoutingModule { }
