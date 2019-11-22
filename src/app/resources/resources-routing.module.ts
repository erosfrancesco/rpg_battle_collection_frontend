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
    loadChildren: () => import('./actions/actions.module').then(m => m.ActionsModule)
  },
  {
    path: 'actors',
    loadChildren: () => import('./actors/actors.module').then(m => m.ActorsModule)
  },
  {
    path: 'ai',
    loadChildren: () => import('./ai/ais.module').then(m => m.AisModule)
  },
  {
    path: 'animations',
    loadChildren: () => import('./animations/animations.module').then(m => m.AnimationsModule)
  },
  {
    path: 'commands',
    loadChildren: () => import('./commands/commands.module').then(m => m.CommandsModule)
  },
  {
    path: 'objects',
    loadChildren: () => import('./objects/objects.module').then(m => m.ObjectsModule)
  },
  {
    path: 'sprites',
    loadChildren: () => import('./sprites/sprites.module').then(m => m.SpritesModule)
  },
  {
    path: 'battles',
    loadChildren: () => import('./battles/battles.module').then(m => m.BattlesModule)
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
