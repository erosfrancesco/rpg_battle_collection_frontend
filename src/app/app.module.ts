import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {  
          MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatCardModule, MatIconModule, 
          MatSidenavModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatTabsModule, 
          MatSelectModule, MatExpansionModule, MatDividerModule, MatChipsModule
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

import { AceModule } from 'ngx-ace-wrapper';
import { ActionsListComponent } from './topics/actions/actions-list/actions-list.component';
import { ActionDetailComponent } from './topics/actions/action-detail/action-detail.component';
import { ActionItemComponent } from './topics/actions/action-item/action-item.component';
import { BattleobjectsListComponent } from './topics/battleobject/battleobjects-list/battleobjects-list.component';
import { BattleobjectsItemComponent } from './topics/battleobject/battleobjects-item/battleobjects-item.component';
import { BattleobjectsDetailComponent } from './topics/battleobject/battleobjects-detail/battleobjects-detail.component';
import { AnimationsListComponent } from './topics/animations/animations-list/animations-list.component';
import { AnimationsItemComponent } from './topics/animations/animations-item/animations-item.component';
import { AnimationsDetailComponent } from './topics/animations/animations-detail/animations-detail.component';
import { BattleobjectsAnimationsListComponent } from './topics/battleobject/battleobjects-detail/battleobjects-animations-list/battleobjects-animations-list.component';
import { CommandListComponent } from './topics/battlecommands/command-list/command-list.component';
import { CommandItemComponent } from './topics/battlecommands/command-item/command-item.component';
import { CommandDetailComponent } from './topics/battlecommands/command-detail/command-detail.component';
import { ActorsListComponent } from './topics/actors/actors-list/actors-list.component';
import { ActorItemComponent } from './topics/actors/actor-item/actor-item.component';
import { ActorDetailComponent } from './topics/actors/actor-detail/actor-detail.component';
import { ActorSpriteComponent } from './topics/actors/actor-detail/sections/actor-sprite/actor-sprite.component';
import { ActorAiComponent } from './topics/actors/actor-detail/sections/actor-ai/actor-ai.component';
import { ActorCommandsComponent } from './topics/actors/actor-detail/sections/actor-commands/actor-commands.component';
import { ActorStatsComponent } from './topics/actors/actor-detail/sections/actor-stats/actor-stats.component';


import { CustomCodeeditorComponent } from './misc/custom-codeeditor/custom-codeeditor.component';
import { ItemBuildComponent } from './misc/custom-codeeditor/plugins/item-build/item-build.component';
import { WrapperEditorComponent } from './misc/custom-codeeditor/wrapper/wrapper-editor/wrapper-editor.component';
import { BattleListComponent } from './topics/battles/battle-list/battle-list.component';
import { BattleItemComponent } from './topics/battles/battle-item/battle-item.component';
import { BattleDetailComponent } from './topics/battles/battle-detail/battle-detail.component';
import { ActorsSectionComponent } from './topics/battles/battle-detail/actors-section/actors-section.component';
import { ResourcesItemWrapperComponent } from './misc/resources-item-wrapper/resources-item-wrapper.component';
import { DialogConfirmComponent } from './dialogs/dialog-confirm/dialog-confirm.component';
import { PrimaryButtonComponent } from './navigation/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './navigation/secondary-button/secondary-button.component';
import { ResourcesListWrapperComponent } from './misc/resources-list-wrapper/resources-list-wrapper.component';
import { GroupListComponent } from './misc/group-list/group-list.component';
import { ResourcesGroupPluginComponent } from './misc/resources-group-plugin/resources-group-plugin.component';
import { GroupListItemsComponent } from './misc/group-list-items/group-list-items.component';
import { GroupListSelectableComponent } from './misc/group-list-selectable/group-list-selectable.component';


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
    BattleobjectsAnimationsListComponent,
    CommandListComponent,
    CommandItemComponent,
    CommandDetailComponent,
    ActorsListComponent,
    ActorItemComponent,
    ActorDetailComponent,
    ActorSpriteComponent,
    ActorAiComponent,
    ActorCommandsComponent,
    ActorStatsComponent,
    CustomCodeeditorComponent,
    ItemBuildComponent,
    WrapperEditorComponent,
    BattleListComponent,
    BattleItemComponent,
    BattleDetailComponent,
    ActorsSectionComponent,
    ResourcesItemWrapperComponent,
    DialogConfirmComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    ResourcesListWrapperComponent,
    GroupListComponent,
    ResourcesGroupPluginComponent,
    GroupListItemsComponent,
    GroupListSelectableComponent
  ],
  imports: [
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatInputModule, 
    MatFormFieldModule, MatProgressSpinnerModule, MatCardModule, MatTabsModule, MatSelectModule, MatExpansionModule, 
    MatDividerModule, MatChipsModule,
    
    MatDialogModule,
    AceModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ 
    HeaderComponent
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ DialogLabelComponent, DialogConfirmComponent ]
})
export class AppModule { }
