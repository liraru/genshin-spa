import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PullsModuleChartComponent } from './pulls-module-chart/pulls-module-chart.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PullsModuleChartComponent],
  imports: [CommonModule, NgxChartsModule, TranslateModule.forChild()],
  exports: [PullsModuleChartComponent]
})
export class PullsVolumeChartModule {}
