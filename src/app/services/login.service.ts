import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _logedUserSubject: Subject<IUser> = new Subject<IUser>();
  private _logedUser?: IUser;

  constructor() {}

  public getLogedUserListener(): Observable<IUser> {
    return this._logedUserSubject.asObservable();
  }

  public getLogedUser(): IUser | undefined {
    return this._logedUser;
  }

  public setLogedUser(user: IUser) {
    this._logedUser = user;
    this._logedUserSubject.next(user);
  }
}
