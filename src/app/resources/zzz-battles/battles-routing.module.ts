import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattlesListComponent } from './battles-list/battles-list.component';
import { BattleDetailComponent } from './battle-detail/battle-detail.component';


const battleRoutes: Routes = [
  { path: '', component: BattlesListComponent },
  { path: ':id', component: BattleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(battleRoutes)],
  exports: [RouterModule]
})
export class BattlesRoutingModule { }
