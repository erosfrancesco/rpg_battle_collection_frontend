import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationsListComponent } from './animations-list/animations-list.component';
import { AnimationDetailComponent } from './animation-detail/animation-detail.component';




const commandRoutes: Routes = [
  { path: '', component: AnimationsListComponent },
  { path: ':id', component: AnimationDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(commandRoutes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }
