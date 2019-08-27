import { NgModule } from '@angular/core';

import { ObjectsRoutingModule } from './objects-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ObjectsService } from './objects.service'

import { WrappersModule } from 'src/app/wrappers/wrappers.module';
import { ObjectsListComponent } from './objects-list/objects-list.component';
import { ObjectItemComponent } from './object-item/object-item.component';
import { ObjectDetailComponent } from './object-detail/object-detail.component';
import { ObjectAnimationsListComponent } from './object-detail/objects-animations-list/object-animations-list.component';


@NgModule({
  declarations: [
    ObjectsListComponent, ObjectItemComponent, ObjectDetailComponent, ObjectAnimationsListComponent
  ],
  imports: [
    SharedModule,
    WrappersModule,
    ObjectsRoutingModule,
  ],
  providers: [ ObjectsService ]
})
export class  ObjectsModule { }
