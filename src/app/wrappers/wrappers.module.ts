import { NgModule } from '@angular/core';
import { ShellModule } from '../shell/shell.module';


import { ResourcesItemWrapperComponent } from './resources-item-wrapper/resources-item-wrapper.component';
import { ResourcesListWrapperComponent } from './resources-list-wrapper/resources-list-wrapper.component';
import { ResourceDetailWrapperComponent } from './resource-detail-wrapper/resource-detail-wrapper.component';

import { ColorCardComponent } from './color-card/color-card.component';
import { EditorModule } from './custom-codeeditor/editor.module';
import { DialogLabelComponent } from '../shared/dialogs/dialog-label/dialog-label.component';
import { DialogConfirmComponent } from '../shared/dialogs/dialog-confirm/dialog-confirm.component';
import { FilteredResourcesComponent } from './filtered-resources/filtered-resources.component';



@NgModule({
  declarations: [
    DialogLabelComponent, DialogConfirmComponent, 
    ResourcesItemWrapperComponent, ResourcesListWrapperComponent, ResourceDetailWrapperComponent,
    ColorCardComponent, FilteredResourcesComponent
  ],
  imports: [
    ShellModule,
    EditorModule
  ],
  providers: [ 
  ],
  entryComponents: [ DialogLabelComponent, DialogConfirmComponent ],
  exports: [
    ResourcesItemWrapperComponent, ResourcesListWrapperComponent, ResourceDetailWrapperComponent, 
    ColorCardComponent, FilteredResourcesComponent,
    EditorModule
  ]
})
export class WrappersModule { }
