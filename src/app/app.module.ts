import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpriteListComponent } from './sprite-list/sprite-list.component';
import { SpriteDetailComponent } from './sprite-detail/sprite-detail.component';


import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatCardModule, MatIconModule, MatSidenavModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ItemDisplayComponent } from './item-display/item-display.component';

import { HomePageComponent } from './home-page/home-page.component';
import { SpriteItemComponent } from './sprite-item/sprite-item.component';
import { HeaderComponent } from './navigation/header/header.component';
import { BackButtonComponent } from './navigation/back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SpriteListComponent,
    SpriteDetailComponent,
    ItemDisplayComponent,
    HomePageComponent,
    SpriteItemComponent,
    HeaderComponent,
    BackButtonComponent
  ],
  imports: [
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    NoopAnimationsModule
  ],
  providers: [ HeaderComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
