import { NgModule } from '@angular/core';

import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { OrganizationService } from './organization.service';
import { OrganizationItemComponent } from './organization-item/organization-item.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { ShellModule } from '../shell/shell.module';
import { WrappersModule } from '../wrappers/wrappers.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [OrganizationListComponent, OrganizationDetailComponent, OrganizationItemComponent],
  imports: [
    ShellModule,
    SharedModule,
    WrappersModule,
    OrganizationRoutingModule
  ],
  providers: [ OrganizationService ]
})
export class OrganizationModule { }
