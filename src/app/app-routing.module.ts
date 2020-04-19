import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'


const routes: Routes = [
 	{ path: '', redirectTo: '/experience', pathMatch: 'full' },
	{ path: 'experience', component: AppComponent,
		children: [
		{
			path: 'mcafee',
			component: AppComponent
		},
		{
			path: 'axonify',
			component: AppComponent
		},
		{
			path: 'sobeys',
			component: AppComponent
		},
		{
			path: 'playhouse',
			component: AppComponent
		}]
	},
	{ path: 'projects', component: AppComponent },
	{ path: '**', component: AppComponent} // 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
