import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WeeklyPlanningRoutingModule } from './weekly-planning-routing.module';
import { WeeklyPlanningComponent } from './weekly-planning/weekly-planning.component';

@NgModule({
  declarations: [WeeklyPlanningComponent],
  imports: [CommonModule, WeeklyPlanningRoutingModule]
})
export class WeeklyPlanningModule {}
