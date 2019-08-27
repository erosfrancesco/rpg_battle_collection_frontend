import { NgModule } from '@angular/core';

import { SpritesRoutingModule } from './sprites-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpritesService } from './sprites.service'

import { WrappersModule } from 'src/app/wrappers/wrappers.module';
import { SpritesListComponent } from './sprites-list/sprites-list.component';
import { SpriteItemComponent } from './sprite-item/sprite-item.component';
import { SpriteDetailComponent } from './sprite-detail/sprite-detail.component';


@NgModule({
  declarations: [
    SpritesListComponent, SpriteItemComponent, SpriteDetailComponent
  ],
  imports: [
    SharedModule,
    WrappersModule,
    SpritesRoutingModule,
  ],
  providers: [ SpritesService ]
})
export class  SpritesModule { }
