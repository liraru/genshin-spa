import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeeklyPlanningComponent } from './weekly-planning/weekly-planning.component';

const routes: Routes = [{ path: '', component: WeeklyPlanningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeeklyPlanningRoutingModule {}
