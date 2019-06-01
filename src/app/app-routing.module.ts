import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component'
import { SpriteListComponent } from './topics/sprites/sprite-list/sprite-list.component'
import { SpriteDetailComponent } from './topics/sprites/sprite-detail/sprite-detail.component'
import { AiListComponent } from './topics/ai/ai-list/ai-list.component'
import { AiDetailComponent } from './topics/ai/ai-detail/ai-detail.component'
import { ActionsListComponent } from './topics/actions/actions-list/actions-list.component'
import { ActionDetailComponent } from './topics/actions/action-detail/action-detail.component'

const routes: Routes = [
	{ path: '', component: HomePageComponent },

	{ path: 'sprites', component: SpriteListComponent },
	{ path: 'sprites/:id', component: SpriteDetailComponent },

	{ path: 'ai', component: AiListComponent },
	{ path: 'ai/:id', component: AiDetailComponent },

	{ path: 'actions', component: ActionsListComponent },
	{ path: 'actions/:id', component: ActionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
