import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenuItemModule } from 'src/app/modules/@micro-modules/menu-item/menu-item.module';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [CommonModule, MenuItemModule],
  exports: [MainMenuComponent]
})
export class MainMenuModule {}
