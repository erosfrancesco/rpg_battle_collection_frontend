import { NgModule } from '@angular/core';

import { BattlesRoutingModule } from './battles-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BattlesService } from './battles.service'

import { WrappersModule } from 'src/app/wrappers/wrappers.module';
import { BattlesListComponent } from './battles-list/battles-list.component';
import { BattleItemComponent } from './battle-item/battle-item.component';
import { BattleDetailComponent } from './battle-detail/battle-detail.component';
import { BattleActorsComponent } from './battle-detail/sections/battle-actors/battle-actors.component';
import { BattleEventsComponent } from './battle-detail/sections/battle-events/battle-events.component';


@NgModule({
  declarations: [
    BattlesListComponent, BattleItemComponent, BattleDetailComponent,
    BattleActorsComponent, BattleEventsComponent
  ],
  imports: [
    SharedModule,
    WrappersModule,
    BattlesRoutingModule,
  ],
  providers: [ BattlesService ]
})
export class  BattlesModule { }
