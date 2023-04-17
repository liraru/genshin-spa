import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private _pageTitle: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public getPageTitle(): Observable<string> {
    return this._pageTitle.asObservable();
  }

  public setPageTitle(title: string) {
    this._pageTitle.next(title);
  }
}
