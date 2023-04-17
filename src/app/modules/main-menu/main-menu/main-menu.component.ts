import { Component } from '@angular/core';
import { MENU } from 'src/app/constants/menu.constant';
import { IMenuItem } from 'src/app/interfaces/menu.interface';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  public menu: IMenuItem[] = MENU;
}
