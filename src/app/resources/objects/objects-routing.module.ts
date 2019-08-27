import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectsListComponent } from './objects-list/objects-list.component';
import { ObjectDetailComponent } from './object-detail/object-detail.component';




const objectRoutes: Routes = [
  { path: '', component: ObjectsListComponent },
  { path: ':id', component: ObjectDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(objectRoutes)],
  exports: [RouterModule]
})
export class ObjectsRoutingModule { }
