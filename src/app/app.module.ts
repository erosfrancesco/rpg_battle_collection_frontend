import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {  
          MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatCardModule, MatIconModule, 
          MatSidenavModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatTabsModule, MatSelectModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './navigation/header/header.component';
import { BackButtonComponent } from './navigation/back-button/back-button.component';
import { DialogLabelComponent } from './dialogs/dialog-label/dialog-label.component';

import { AiListComponent } from './topics/ai/ai-list/ai-list.component';
import { AiItemComponent } from './topics/ai/ai-item/ai-item.component';
import { AiDetailComponent } from './topics/ai/ai-detail/ai-detail.component';

import { SpriteItemComponent } from './topics/sprites/sprite-item/sprite-item.component';
import { SpriteListComponent } from './topics/sprites/sprite-list/sprite-list.component';
import { SpriteDetailComponent } from './topics/sprites/sprite-detail/sprite-detail.component';

import { AceModule, AceConfigInterface, ACE_CONFIG } from 'ngx-ace-wrapper';
import { ActionsListComponent } from './topics/actions/actions-list/actions-list.component';
import { ActionDetailComponent } from './topics/actions/action-detail/action-detail.component';
import { ActionItemComponent } from './topics/actions/action-item/action-item.component';
import { BattleobjectsListComponent } from './topics/battleobject/battleobjects-list/battleobjects-list.component';
import { BattleobjectsItemComponent } from './topics/battleobject/battleobjects-item/battleobjects-item.component';
import { BattleobjectsDetailComponent } from './topics/battleobject/battleobjects-detail/battleobjects-detail.component';
import { AnimationsListComponent } from './topics/animations/animations-list/animations-list.component';
import { AnimationsItemComponent } from './topics/animations/animations-item/animations-item.component';
import { AnimationsDetailComponent } from './topics/animations/animations-detail/animations-detail.component';
import { BattleobjectsAnimationsListComponent } from './topics/battleobject/battleobjects-animations-list/battleobjects-animations-list.component';
 
const DEFAULT_ACE_CONFIG: AceConfigInterface = {
};

@NgModule({
  declarations: [
    AppComponent,
    SpriteListComponent,
    SpriteDetailComponent,
    HomePageComponent,
    SpriteItemComponent,
    HeaderComponent,
    BackButtonComponent,
    DialogLabelComponent,
    AiListComponent,
    AiItemComponent,
    AiDetailComponent,
    ActionsListComponent,
    ActionDetailComponent,
    ActionItemComponent,
    BattleobjectsListComponent,
    BattleobjectsItemComponent,
    BattleobjectsDetailComponent,
    AnimationsListComponent,
    AnimationsItemComponent,
    AnimationsDetailComponent,
    BattleobjectsAnimationsListComponent
  ],
  imports: [
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, 
    MatFormFieldModule, MatProgressSpinnerModule, MatCardModule, MatTabsModule, MatSelectModule,
    MatDialogModule,
    AceModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ 
    HeaderComponent, 
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG
    }
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ DialogLabelComponent ]
})
export class AppModule { }
