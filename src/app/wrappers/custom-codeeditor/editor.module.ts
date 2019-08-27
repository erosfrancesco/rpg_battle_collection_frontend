import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { AceModule } from 'ngx-ace-wrapper';

import { WrapperEditorComponent } from './wrapper/wrapper-editor/wrapper-editor.component';
import { CustomCodeeditorComponent } from './custom-codeeditor.component';
import { ItemBuildComponent } from './plugins/item-build/item-build.component';



@NgModule({
  declarations: [
    WrapperEditorComponent, CustomCodeeditorComponent, ItemBuildComponent
  ],
  imports: [
    SharedModule,
    AceModule,
  ],
  providers: [ 
  ],
  exports: [
    WrapperEditorComponent, CustomCodeeditorComponent, ItemBuildComponent
  ]
})
export class EditorModule { }
