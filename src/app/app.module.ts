import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpriteListComponent } from './sprite-list/sprite-list.component';
import { SpriteDetailComponent } from './sprite-detail/sprite-detail.component';


import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ItemDisplayComponent } from './item-display/item-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SpriteListComponent,
    SpriteDetailComponent,
    ItemDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
