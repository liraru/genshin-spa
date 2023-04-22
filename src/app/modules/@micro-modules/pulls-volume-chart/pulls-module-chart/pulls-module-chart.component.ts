import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { IAreaChartData } from 'src/app/modules/@micro-modules/pulls-volume-chart/area-chart-stacked-data.interface';

@Component({
  selector: 'app-pulls-module-chart',
  templateUrl: './pulls-module-chart.component.html',
  styleUrls: ['./pulls-module-chart.component.scss']
})
export class PullsModuleChartComponent {
  @Input() data: IAreaChartData[] = [];

  view: [number, number] = [700, 300];
  legend = true;
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
    domain: [
      '#a8385d',
      '#7aa3e5',
      '#a27ea8',
      '#aae3f5',
      '#adcded',
      '#a95963',
      '#8796c0',
      '#7ed3ed',
      '#50abcc',
      '#ad6886'
    ]
  };

  constructor(private readonly _translate: TranslateService) {
    // // ! MOCK ! //
    // this.data = [
    //   {
    //     name: 'Turks and Caicos Islands',
    //     series: [
    //       {
    //         value: 2893,
    //         name: '2016-09-20T10:37:23.830Z'
    //       },
    //       {
    //         value: 6224,
    //         name: '2016-09-21T06:16:09.357Z'
    //       },
    //       {
    //         value: 2131,
    //         name: '2016-09-15T23:48:54.596Z'
    //       },
    //       {
    //         value: 5761,
    //         name: '2016-09-23T12:08:40.637Z'
    //       },
    //       {
    //         value: 2381,
    //         name: '2016-09-20T00:16:47.355Z'
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Libya',
    //     series: [
    //       {
    //         value: 4716,
    //         name: '2016-09-20T10:37:23.830Z'
    //       },
    //       {
    //         value: 5450,
    //         name: '2016-09-21T06:16:09.357Z'
    //       },
    //       {
    //         value: 3612,
    //         name: '2016-09-15T23:48:54.596Z'
    //       },
    //       {
    //         value: 4235,
    //         name: '2016-09-23T12:08:40.637Z'
    //       },
    //       {
    //         value: 6466,
    //         name: '2016-09-20T00:16:47.355Z'
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Gabon',
    //     series: [
    //       {
    //         value: 4742,
    //         name: '2016-09-20T10:37:23.830Z'
    //       },
    //       {
    //         value: 6024,
    //         name: '2016-09-21T06:16:09.357Z'
    //       },
    //       {
    //         value: 2858,
    //         name: '2016-09-15T23:48:54.596Z'
    //       },
    //       {
    //         value: 4946,
    //         name: '2016-09-23T12:08:40.637Z'
    //       },
    //       {
    //         value: 3726,
    //         name: '2016-09-20T00:16:47.355Z'
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Italy',
    //     series: [
    //       {
    //         value: 3995,
    //         name: '2016-09-20T10:37:23.830Z'
    //       },
    //       {
    //         value: 3278,
    //         name: '2016-09-21T06:16:09.357Z'
    //       },
    //       {
    //         value: 6881,
    //         name: '2016-09-15T23:48:54.596Z'
    //       },
    //       {
    //         value: 6310,
    //         name: '2016-09-23T12:08:40.637Z'
    //       },
    //       {
    //         value: 4159,
    //         name: '2016-09-20T00:16:47.355Z'
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Dominica',
    //     series: [
    //       {
    //         value: 4198,
    //         name: '2016-09-20T10:37:23.830Z'
    //       },
    //       {
    //         value: 5709,
    //         name: '2016-09-21T06:16:09.357Z'
    //       },
    //       {
    //         value: 3698,
    //         name: '2016-09-15T23:48:54.596Z'
    //       },
    //       {
    //         value: 2952,
    //         name: '2016-09-23T12:08:40.637Z'
    //       },
    //       {
    //         value: 5440,
    //         name: '2016-09-20T00:16:47.355Z'
    //       }
    //     ]
    //   }
    // ];
    // // ! MOCK ! //
  }

  public onSelect(event: any) {
    console.log(event);
  }
}
