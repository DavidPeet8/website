import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContentComponent } from '@content-list/components/content/content.component'

const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		useHash: true,
		preloadingStrategy: PreloadAllModules
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
