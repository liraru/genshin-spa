import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PullsVolumeChartModule } from 'src/app/modules/@micro-modules/pulls-volume-chart/pulls-volume-chart.module';
import { DashboardRoutingModule } from 'src/app/modules/dashboard/dashboard-routing.module';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PullsVolumeChartModule
  ]
})
export class DashboardModule {}
