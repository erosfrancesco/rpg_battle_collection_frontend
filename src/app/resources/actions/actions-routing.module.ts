import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionsListComponent } from './actions-list/actions-list.component';
import { ActionDetailComponent } from './action-detail/action-detail.component';


const actionRoutes: Routes = [
  { path: '', component: ActionsListComponent },
  { path: ':id', component: ActionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(actionRoutes)],
  exports: [RouterModule]
})
export class ActionsRoutingModule { }
