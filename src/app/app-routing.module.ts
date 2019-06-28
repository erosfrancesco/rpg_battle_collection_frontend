import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component'
import { SpriteListComponent } from './topics/sprites/sprite-list/sprite-list.component'
import { SpriteDetailComponent } from './topics/sprites/sprite-detail/sprite-detail.component'
import { AiListComponent } from './topics/ai/ai-list/ai-list.component'
import { AiDetailComponent } from './topics/ai/ai-detail/ai-detail.component'
import { ActionsListComponent } from './topics/actions/actions-list/actions-list.component'
import { ActionDetailComponent } from './topics/actions/action-detail/action-detail.component'
import { BattleobjectsListComponent } from './topics/battleobject/battleobjects-list/battleobjects-list.component'
import { BattleobjectsDetailComponent } from './topics/battleobject/battleobjects-detail/battleobjects-detail.component'
import { AnimationsListComponent } from './topics/animations/animations-list/animations-list.component'
import { AnimationsDetailComponent } from './topics/animations/animations-detail/animations-detail.component'
import { CommandListComponent } from './topics/battlecommands/command-list/command-list.component'
import { CommandDetailComponent } from './topics/battlecommands/command-detail/command-detail.component'
import { ActorsListComponent } from './topics/actors/actors-list/actors-list.component'
import { ActorDetailComponent } from './topics/actors/actor-detail/actor-detail.component'
import { BattleListComponent } from './topics/battles/battle-list/battle-list.component'
import { BattleDetailComponent } from './topics/battles/battle-detail/battle-detail.component'

const routes: Routes = [
	{ path: '', component: HomePageComponent },

	{ path: 'sprites', component: SpriteListComponent },
	{ path: 'sprites/:id', component: SpriteDetailComponent },

	{ path: 'ai', component: AiListComponent },
	{ path: 'ai/:id', component: AiDetailComponent },

	{ path: 'actions', component: ActionsListComponent },
	{ path: 'actions/:id', component: ActionDetailComponent },

	{ path: 'objects', component: BattleobjectsListComponent },
	{ path: 'objects/:id', component: BattleobjectsDetailComponent },

	{ path: 'animations', component: AnimationsListComponent },
	{ path: 'animations/:id', component: AnimationsDetailComponent },

	{ path: 'commands', component: CommandListComponent },
	{ path: 'commands/:id', component: CommandDetailComponent },

	{ path: 'actors', component: ActorsListComponent },
	{ path: 'actors/:id', component: ActorDetailComponent },

	{ path: 'battles', component: BattleListComponent },
	{ path: 'battles/:id', component: BattleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
