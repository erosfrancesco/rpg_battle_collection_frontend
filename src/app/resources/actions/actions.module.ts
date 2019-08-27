import { NgModule } from '@angular/core';

import { ActionsRoutingModule } from './actions-routing.module';
import { ActionsListComponent } from './actions-list/actions-list.component';
import { ActionItemComponent } from './action-item/action-item.component';
import { ActionDetailComponent } from './action-detail/action-detail.component';
import { ActionsService } from './actions.service'

import { SharedModule } from 'src/app/shared/shared.module';
import { WrappersModule } from 'src/app/wrappers/wrappers.module';


@NgModule({
  declarations: [ActionsListComponent, ActionItemComponent, ActionDetailComponent],
  imports: [
    SharedModule,
    WrappersModule,
    ActionsRoutingModule,
  ],
  providers: [ ActionsService ]
})
export class ActionsModule { }
