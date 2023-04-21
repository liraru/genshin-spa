import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/constants/endpoints.constant';
import { IBannersPity } from 'src/app/interfaces/wish-history/banners-pity.interface';
import { IFiveStarsHistory } from 'src/app/interfaces/wish-history/five-stars-history.interface';
import { IPullVolumeChart } from 'src/app/interfaces/wish-history/pull-volume-chart.interface';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // TODO when no user kick out session and go back to login
  private _userId = (this._loginService.getLogedUser()?.id || 1).toString();

  constructor(private readonly _http: HttpClient, private readonly _loginService: LoginService) {}

  public getWishVolumeChartData(): Observable<IPullVolumeChart> {
    return this._http.get<IPullVolumeChart>(
      `${environment.api}/${ENDPOINTS.WISH_HISTORY.GET_WISH_VOLUME_CHART.replace(':user', this._userId)}`
    );
  }

  public getBannersPity(): Observable<IBannersPity> {
    return this._http.get<IBannersPity>(
      `${environment.api}/${ENDPOINTS.WISH_HISTORY.GET_BANNERS_PITY.replace(':user', this._userId)}`
    );
  }

  public get5StarsHistory(): Observable<IFiveStarsHistory> {
    return this._http.get<IFiveStarsHistory>(
      `${environment.api}/${ENDPOINTS.WISH_HISTORY.GET_5_STARS_HISTORY.replace(':user', this._userId)}`
    );
  }
}
