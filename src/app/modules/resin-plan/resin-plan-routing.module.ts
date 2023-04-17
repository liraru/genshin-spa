import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResinPlanComponent } from './resin-plan/resin-plan.component';

const routes: Routes = [{ path: '', component: ResinPlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResinPlanRoutingModule {}
