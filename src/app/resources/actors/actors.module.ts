import { NgModule } from '@angular/core';

import { ActorsRoutingModule } from './actors-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActorsService } from './actors.service'

import { WrappersModule } from 'src/app/wrappers/wrappers.module';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { ActorItemComponent } from './actor-item/actor-item.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorAiComponent } from './actor-detail/sections/actor-ai/actor-ai.component';
import { ActorCommandsComponent } from './actor-detail/sections/actor-commands/actor-commands.component';
import { ActorEventsComponent } from './actor-detail/sections/actor-events/actor-events.component';
import { ActorSpriteComponent } from './actor-detail/sections/actor-sprite/actor-sprite.component';
import { ActorStatsComponent } from './actor-detail/sections/actor-stats/actor-stats.component';


@NgModule({
  declarations: [ActorsListComponent, ActorItemComponent, ActorDetailComponent, 
    ActorAiComponent, ActorCommandsComponent, ActorEventsComponent, ActorSpriteComponent, ActorStatsComponent],
  imports: [
    SharedModule,
    WrappersModule,
    ActorsRoutingModule,
  ],
  providers: [ ActorsService ]
})
export class ActorsModule { }
