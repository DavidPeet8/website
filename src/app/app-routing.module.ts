import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { ContentComponent } from '@content-list/components/content/content.component'

const routes: Routes = [
	{ path: '', redirectTo: '/experience', pathMatch: 'full' },
	{ 
		path: 'experience',  
		component: ContentComponent,
		loadChildren: () => import ('@content-list/content-list.module').then(mod => mod.ContentListModule) 
	},
	{ 
		path: 'projects', 
		component: ContentComponent,
		loadChildren: () => import('@content-list/content-list.module').then(mod => mod.ContentListModule) 
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
