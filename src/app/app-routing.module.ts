import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component'
// import { SpriteListComponent } from './topics/sprites/sprite-list/sprite-list.component'
// import { SpriteDetailComponent } from './topics/sprites/sprite-detail/sprite-detail.component'
// import { AiListComponent } from './topics/ai/ai-list/ai-list.component'
// import { AiDetailComponent } from './topics/ai/ai-detail/ai-detail.component'
// // import { ActionsListComponent } from './topics/actions/actions-list/actions-list.component'
// // import { ActionDetailComponent } from './topics/actions/action-detail/action-detail.component'
// import { BattleobjectsListComponent } from './topics/battleobject/battleobjects-list/battleobjects-list.component'
// import { BattleobjectsDetailComponent } from './topics/battleobject/battleobjects-detail/battleobjects-detail.component'
// import { AnimationsListComponent } from './topics/animations/animations-list/animations-list.component'
// import { AnimationsDetailComponent } from './topics/animations/animations-detail/animations-detail.component'
// import { CommandListComponent } from './topics/battlecommands/command-list/command-list.component'
// import { CommandDetailComponent } from './topics/battlecommands/command-detail/command-detail.component'
// import { ActorsListComponent } from './topics/actors/actors-list/actors-list.component'
// import { ActorDetailComponent } from './topics/actors/actor-detail/actor-detail.component'
// import { BattleListComponent } from './topics/battles/battle-list/battle-list.component'
// import { BattleDetailComponent } from './topics/battles/battle-detail/battle-detail.component'

// import { AuthGuardService } from './services/utils/auth/auth-guard.service'
// import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';



const routes: Routes = [
	{ path: '', component: HomePageComponent },

	{ path: 'resources', loadChildren: './resources/resources.module#ResourcesModule' },

	// { path: 'sprites', component: SpriteListComponent }, //, canActivate: [AuthGuardService] },
	// { path: 'sprites/:id', component: SpriteDetailComponent }, //, canActivate: [AuthGuardService] },

	// { path: 'ai', component: AiListComponent}, //, canActivate: [AuthGuardService] },
	// { path: 'ai/:id', component: AiDetailComponent}, //, canActivate: [AuthGuardService] },

	// // { path: 'actions', component: ActionsListComponent}, //, canActivate: [AuthGuardService] },
	// // { path: 'actions/:id', component: ActionDetailComponent}, //, canActivate: [AuthGuardService] },

	// { path: 'objects', component: BattleobjectsListComponent}, //, canActivate: [AuthGuardService] },
	// { path: 'objects/:id', component: BattleobjectsDetailComponent}, //, canActivate: [AuthGuardService] },

	// { path: 'animations', component: AnimationsListComponent}, //, canActivate: [AuthGuardService] },
	// { path: 'animations/:id', component: AnimationsDetailComponent}, //, canActivate: [AuthGuardService] },

	// { path: 'commands', component: CommandListComponent}, //, canActivate: [AuthGuardService] },
	// { path: 'commands/:id', component: CommandDetailComponent}, //, canActivate: [AuthGuardService] },

	// { path: 'actors', component: ActorsListComponent}, //, canActivate: [AuthGuardService] },
	// { path: 'actors/:id', component: ActorDetailComponent}, //, canActivate: [AuthGuardService] },

	// { path: 'battles', component: BattleListComponent}, //, canActivate: [AuthGuardService] },
	// { path: 'battles/:id', component: BattleDetailComponent}, //, canActivate: [AuthGuardService] },

	// { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ 
  ],
})
export class AppRoutingModule { }
