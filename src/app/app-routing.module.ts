import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'

const routes: Routes = [
	{ 
		path: 'experience',  
		loadChildren: () => import ('@content-list/content-list.module').then(mod => mod.ContentListModule) 
	},
	{ 
		path: 'projects', 
		loadChildren: () => import('@content-list/content-list.module').then(mod => mod.ContentListModule) 
	},
	{ path: '', redirectTo: '/experience', pathMatch: 'full' },
	//{ path: '**', redirectTo: '/experience', pathMatch: 'full' } // 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
