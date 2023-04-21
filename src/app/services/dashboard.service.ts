import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private readonly _http: HttpClient) {}

  public getWishVolumeChartData() {
    return this._http.get(``)
  }
}
