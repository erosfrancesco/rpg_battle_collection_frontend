import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorsListComponent } from './actors-list/actors-list.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';



const actionRoutes: Routes = [
  { path: '', component: ActorsListComponent },
  { path: ':id', component: ActorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(actionRoutes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
