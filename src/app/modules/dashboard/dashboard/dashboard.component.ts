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
      this.wishVolumeChart = [
        { name: '5', series: [] },
        { name: '4', series: [] },
        { name: '3', series: [] }
      ];
      data.forEach((el: IPullVolumeChart) => {
        this.wishVolumeChart.find((f) => f.name === '5')?.series.push({ name: el.date, value: el.wishes.r5 });
        this.wishVolumeChart.find((f) => f.name === '4')?.series.push({ name: el.date, value: el.wishes.r4 });
        this.wishVolumeChart.find((f) => f.name === '3')?.series.push({ name: el.date, value: el.wishes.r3 });
      });
    });
  }
}
