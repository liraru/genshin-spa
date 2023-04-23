import { Component, OnInit } from '@angular/core';
import { IPullVolumeChart } from 'src/app/interfaces/wish-history/pull-volume-chart.interface';
import { IAreaChartData } from 'src/app/modules/@micro-modules/pulls-volume-chart/area-chart-stacked-data.interface';
import { WishHistoryService } from 'src/app/services/wish-history.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public wishVolumeChart: IAreaChartData[] = [];

  constructor(private readonly _wishService: WishHistoryService) {}

  ngOnInit(): void {
    this._getWishVolumeChartData();
  }

  private _getWishVolumeChartData() {
    this._wishService.getWishVolumeChartData().subscribe((data: IPullVolumeChart[]) => {
      this.wishVolumeChart = [];
      data.forEach((el: IPullVolumeChart) => {
        this.wishVolumeChart.push({
          name: `${el.date.substring(5, 7)}/${el.date.substring(2, 4)}`,
          series: [
            { name: '3★', value: el.wishes.r3 },
            { name: '4★', value: el.wishes.r4 },
            { name: '5★', value: el.wishes.r5 }
          ]
        });
      });
    });
  }
}
