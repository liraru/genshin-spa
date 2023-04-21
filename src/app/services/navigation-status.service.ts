import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMenuItem } from 'src/app/interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationStatusService {
  private _activeMenuItem: Subject<IMenuItem> = new Subject<IMenuItem>();

  constructor() {}

  public getActiveMenuItem(): Observable<IMenuItem> {
    return this._activeMenuItem.asObservable();
  }

  public setActiveMenuItem(item: IMenuItem) {
    this._activeMenuItem.next(item);
  }
}
