import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MENU } from 'src/app/constants/menu.constant';
import { IMenuItem } from 'src/app/interfaces/menu.interface';
import { NavigationStatusService } from 'src/app/services/navigation-status.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() item: IMenuItem;
  @Input() isActive: boolean = false;
  @Output() onItemChange: EventEmitter<string> = new EventEmitter<string>();

  public icons = [];

  constructor(private readonly _navigationStatusService: NavigationStatusService) {
    this.item = MENU[0];
  }

  public setRoute(item: IMenuItem) {
    this._navigationStatusService.setActiveMenuItem(item);
    this.onItemChange.emit(item.key);
  }
}
