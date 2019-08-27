import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './home-page/home-page.component';

import { ShellModule } from './shell/shell.module'
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    ShellModule,
    AppRoutingModule
  ],
  providers: [ 
  ],
  bootstrap: [ AppComponent ],
  entryComponents: []
})
export class AppModule { }
