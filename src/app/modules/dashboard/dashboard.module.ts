import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FiveStarsHistoryModule } from 'src/app/modules/@micro-modules/five-stars-history/five-stars-history.module';
import { PullsVolumeChartModule } from 'src/app/modules/@micro-modules/pulls-volume-chart/pulls-volume-chart.module';
import { DashboardRoutingModule } from 'src/app/modules/dashboard/dashboard-routing.module';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // * LIBRARIES
    // * MICROMODULES
    PullsVolumeChartModule,
    FiveStarsHistoryModule
  ]
})
export class DashboardModule {}
