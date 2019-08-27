import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandsListComponent } from './commands-list/commands-list.component';
import { CommandDetailComponent } from './command-detail/command-detail.component';




const commandRoutes: Routes = [
  { path: '', component: CommandsListComponent },
  { path: ':id', component: CommandDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(commandRoutes)],
  exports: [RouterModule]
})
export class CommandsRoutingModule { }
