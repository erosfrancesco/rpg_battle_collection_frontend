import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {  
          MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatCardModule, MatIconModule, 
          MatSidenavModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatExpansionModule
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
import { AceEditorWrapperComponent } from './ace-editor-wrapper/ace-editor-wrapper.component';

import { AceModule, AceConfigInterface, ACE_CONFIG } from 'ngx-ace-wrapper';
import { ActionsListComponent } from './topics/actions/actions-list/actions-list.component';
import { ActionDetailComponent } from './topics/actions/action-detail/action-detail.component';
import { ActionItemComponent } from './topics/actions/action-item/action-item.component';
 
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
    AceEditorWrapperComponent,
    ActionsListComponent,
    ActionDetailComponent,
    ActionItemComponent
  ],
  imports: [
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, 
    MatFormFieldModule, MatProgressSpinnerModule, MatCardModule, MatExpansionModule,
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
