import { NgModule } from '@angular/core';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ShellModule } from '../shell/shell.module';

@NgModule({
  declarations: [],
  imports: [
    ShellModule,
    ResourcesRoutingModule
  ],

  exports: [
  ]
})
export class ResourcesModule { }
