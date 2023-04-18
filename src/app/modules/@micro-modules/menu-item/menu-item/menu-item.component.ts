import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { IMenuItem } from 'src/app/interfaces/menu.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() item: IMenuItem;

  public icons = [];

  constructor(iconLibrary: FaIconLibrary) {
    this.item = { icon: faChartSimple, key: '', route: '' };
  }
}
