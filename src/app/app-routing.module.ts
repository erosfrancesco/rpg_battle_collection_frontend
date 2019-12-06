import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component'
import { AuthGuard } from './user/auth.guard';


const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: HomePageComponent },
  
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.LoginModule) },
  
  { path: 'organization', canActivate: [AuthGuard], loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule) },

  { path: 'resources', canActivate: [AuthGuard], loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
