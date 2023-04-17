import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishHistoryComponent } from './wish-history/wish-history.component';

const routes: Routes = [{ path: '', component: WishHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishHistoryRoutingModule {}
