import { Component, Input } from '@angular/core';
import { IMenuItem } from 'src/app/interfaces/menu.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() item: IMenuItem;

  constructor() {
    this.item = { icon: '', key: '', route: '' };
  }
}
