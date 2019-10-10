import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesHomeComponent } from './resources-home/resources-home.component';

const resourcesRoutes: Routes = [
  {
    path: '', 
    component: ResourcesHomeComponent
  },
  {
    path: 'actions',
    loadChildren: './actions/actions.module#ActionsModule'
  },
  {
    path: 'actors',
    loadChildren: './actors/actors.module#ActorsModule'
  },
  {
    path: 'ai',
    loadChildren: './ai/ais.module#AisModule'
  },
  {
    path: 'animations',
    loadChildren: './animations/animations.module#AnimationsModule'
  },
  {
    path: 'commands',
    loadChildren: './commands/commands.module#CommandsModule'
  },
  {
    path: 'objects',
    loadChildren: './objects/objects.module#ObjectsModule'
  },
  {
    path: 'sprites',
    loadChildren: './sprites/sprites.module#SpritesModule'
  },
  {
    path: 'battles',
    loadChildren: './battles/battles.module#BattlesModule'
  },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(resourcesRoutes)
  ],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
