import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { COLOURS } from 'src/app/constants/colours.constant';
import { IAreaChartData } from 'src/app/modules/@micro-modules/pulls-volume-chart/area-chart-stacked-data.interface';

@Component({
  selector: 'app-pulls-module-chart',
  templateUrl: './pulls-module-chart.component.html',
  styleUrls: ['./pulls-module-chart.component.scss']
})
export class PullsModuleChartComponent {
  @Input() data: IAreaChartData[] = [];
  @Input() view: [number, number] = [700, 300];
  legend = false;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = false;
  showXAxisLabel = false;
  xAxisLabel = this._translate.instant('CHARTS.MONTH');
  yAxisLabel = this._translate.instant('CHARTS.VOLUME');
  timeline = true;
  schemeType = ScaleType.Ordinal;
  colorScheme: Color = {
    name: 'cool',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['gold', COLOURS.SECONDARY, COLOURS.TERTIARY]
  };

  constructor(private readonly _translate: TranslateService) {}

  public onSelect(event: any) {
    console.log(event);
  }
}
