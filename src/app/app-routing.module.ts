import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component'


const routes: Routes = [
  { path: '', component: HomePageComponent },
  
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.LoginModule) },

	{ path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ 
  ],
})
export class AppRoutingModule { }
