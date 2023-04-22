import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pulls-module-chart',
  templateUrl: './pulls-module-chart.component.html',
  styleUrls: ['./pulls-module-chart.component.scss']
})
export class PullsModuleChartComponent {
  @Input() data: // TODO interfaces

  public chartConfig = {
    multi: [],
    view: [700, 300],
    // options
    legend: true,
    showLabels: true,
    animations: true,
    xAxis: true,
    yAxis: true,
    showYAxisLabel: false,
    showXAxisLabel: false,
    xAxisLabel: this._translate.instant('CHARTS.MONTH'),
    yAxisLabel: this._translate.instant('CHARTS.VOLUME'),
    timeline: true,
    colorScheme: {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    }
  };

  constructor(private readonly _translate: TranslateService) {}

  public onSelect(event: any) {
    console.log(event);
  }
}
