import { NgModule } from '@angular/core';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesHomeComponent } from './resources-home/resources-home.component';
import { ShellModule } from '../shell/shell.module';


@NgModule({
  declarations: [ResourcesHomeComponent],
  imports: [
    ShellModule,
    ResourcesRoutingModule
  ],

  exports: [
  ]
})
export class ResourcesModule { }
