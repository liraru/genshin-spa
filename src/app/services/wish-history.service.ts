import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/constants/endpoints.constant';
import { IBannersPity } from 'src/app/interfaces/wish-history/banners-pity.interface';
import { IPullVolumeChart } from 'src/app/interfaces/wish-history/pull-volume-chart.interface';
import { IRollHistory } from 'src/app/interfaces/wish-history/pull.interface';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class WishHistoryService {
  // TODO when no user kick out session and go back to login
  private _userId = (this._loginService.getLogedUser()?.id || 1).toString();

  constructor(private readonly _http: HttpClient, private readonly _loginService: LoginService) {}

  public getWishVolumeChartData(): Observable<IPullVolumeChart[]> {
    return this._http.get<IPullVolumeChart[]>(
      `/${ENDPOINTS.WISH_HISTORY.GET_WISH_VOLUME_CHART.replace(':user', this._userId)}`
    );
  }

  public getBannersPity(): Observable<IBannersPity> {
    return this._http.get<IBannersPity>(
      `/${ENDPOINTS.WISH_HISTORY.GET_BANNERS_PITY.replace(':user', this._userId)}`
    );
  }

  public get5StarsHistory(): Observable<IRollHistory> {
    return this._http.get<IRollHistory>(
      `/${ENDPOINTS.WISH_HISTORY.GET_5_STARS_HISTORY.replace(':user', this._userId)}`
    );
  }
}
