import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResinPlanRoutingModule } from './resin-plan-routing.module';
import { ResinPlanComponent } from './resin-plan/resin-plan.component';

@NgModule({
  declarations: [ResinPlanComponent],
  imports: [CommonModule, ResinPlanRoutingModule]
})
export class ResinPlanModule {}
