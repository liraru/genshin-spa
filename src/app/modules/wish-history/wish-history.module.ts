import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WishHistoryRoutingModule } from './wish-history-routing.module';
import { WishHistoryComponent } from './wish-history/wish-history.component';

@NgModule({
  declarations: [WishHistoryComponent],
  imports: [CommonModule, WishHistoryRoutingModule]
})
export class WishHistoryModule {}
