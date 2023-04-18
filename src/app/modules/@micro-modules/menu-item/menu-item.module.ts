import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { MenuItemComponent } from './menu-item/menu-item.component';
import {
  faCalendarWeek,
  faCertificate,
  faChartSimple,
  faClockRotateLeft,
  faPeopleGroup,
  faTrowelBricks
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [MenuItemComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, TranslateModule.forChild()],
  exports: [MenuItemComponent]
})
export class MenuItemModule {}
