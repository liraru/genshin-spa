import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  private _pageNameSubs: Subscription;
  public currentPage: string = '';

  constructor(private readonly _navbarService: NavbarService) {
    this._pageNameSubs = this._navbarService
      .getPageTitle()
      .subscribe((title: string) => (this.currentPage = title));
  }

  ngOnDestroy(): void {
    this._pageNameSubs?.unsubscribe();
  }
}
