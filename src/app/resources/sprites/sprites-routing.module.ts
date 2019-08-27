import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpritesListComponent } from './sprites-list/sprites-list.component';
import { SpriteDetailComponent } from './sprite-detail/sprite-detail.component';


const spriteRoutes: Routes = [
  { path: '', component: SpritesListComponent },
  { path: ':id', component: SpriteDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(spriteRoutes)],
  exports: [RouterModule]
})
export class SpritesRoutingModule { }
