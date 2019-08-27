import { NgModule } from '@angular/core';

import { AisRoutingModule } from './ais-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AisService } from './ais.service'

import { WrappersModule } from 'src/app/wrappers/wrappers.module';
import { AisListComponent } from './ais-list/ais-list.component';
import { AiItemComponent } from './ai-item/ai-item.component';
import { AiDetailComponent } from './ai-detail/ai-detail.component';


@NgModule({
  declarations: [
    AisListComponent, AiItemComponent, AiDetailComponent
  ],
  imports: [
    SharedModule,
    WrappersModule,
    AisRoutingModule,
  ],
  providers: [ AisService ]
})
export class AisModule { }
