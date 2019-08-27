import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component'


const routes: Routes = [
	{ path: '', component: HomePageComponent },

	{ path: 'resources', loadChildren: './resources/resources.module#ResourcesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ 
  ],
})
export class AppRoutingModule { }
