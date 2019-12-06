import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';


const organizationRoutes: Routes = [
  { path: '', component: OrganizationListComponent },
  { path: ':id', component: OrganizationDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(organizationRoutes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
