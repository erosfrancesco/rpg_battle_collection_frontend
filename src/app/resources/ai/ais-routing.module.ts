import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AisListComponent } from './ais-list/ais-list.component';
import { AiDetailComponent } from './ai-detail/ai-detail.component';




const aiRoutes: Routes = [
  { path: '', component: AisListComponent },
  { path: ':id', component: AiDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(aiRoutes)],
  exports: [RouterModule]
})
export class AisRoutingModule { }
