import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MENU } from 'src/app/constants/menu.constant';
import { IMenuItem } from 'src/app/interfaces/menu.interface';
import { NavigationStatusService } from 'src/app/services/navigation-status.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  private _pageNameSubs: Subscription;
  public currentPage: string;

  constructor(private readonly _navigationStatusService: NavigationStatusService) {
    this.currentPage = (
      MENU.find((f: IMenuItem) => f.route === location.pathname.substring(1, location.pathname.length)) ||
      MENU[0]
    ).key;

    this._pageNameSubs = this._navigationStatusService
      .getActiveMenuItem()
      .subscribe((menuItem: IMenuItem) => (this.currentPage = menuItem.key));
  }

  ngOnDestroy(): void {
    this._pageNameSubs?.unsubscribe();
  }
}
