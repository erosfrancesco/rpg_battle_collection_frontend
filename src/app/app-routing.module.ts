import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component'
import { SpriteListComponent } from './sprite-list/sprite-list.component'
import { SpriteDetailComponent } from './sprite-detail/sprite-detail.component'

const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'sprites', component: SpriteListComponent },
	{ path: 'sprites/:id', component: SpriteDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
