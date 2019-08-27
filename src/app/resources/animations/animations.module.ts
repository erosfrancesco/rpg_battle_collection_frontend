import { NgModule } from '@angular/core';

import { AnimationsRoutingModule } from './animations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnimationsService } from './animations.service'

import { WrappersModule } from 'src/app/wrappers/wrappers.module';
import { AnimationsListComponent } from './animations-list/animations-list.component';
import { AnimationItemComponent } from './animation-item/animation-item.component';
import { AnimationDetailComponent } from './animation-detail/animation-detail.component';


@NgModule({
  declarations: [
    AnimationsListComponent, AnimationItemComponent, AnimationDetailComponent
  ],
  imports: [
    SharedModule,
    WrappersModule,
    AnimationsRoutingModule,
  ],
  providers: [ AnimationsService ]
})
export class AnimationsModule { }
