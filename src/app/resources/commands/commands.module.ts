import { NgModule } from '@angular/core';

import { CommandsRoutingModule } from './commands-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommandsService } from './commands.service'

import { WrappersModule } from 'src/app/wrappers/wrappers.module';
import { CommandsListComponent } from './commands-list/commands-list.component';
import { CommandItemComponent } from './command-item/command-item.component';
import { CommandDetailComponent } from './command-detail/command-detail.component';


@NgModule({
  declarations: [
    CommandsListComponent, CommandItemComponent, CommandDetailComponent
  ],
  imports: [
    SharedModule,
    WrappersModule,
    CommandsRoutingModule,
  ],
  providers: [ CommandsService ]
})
export class CommandsModule { }
