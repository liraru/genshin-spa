import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimersComponent } from 'src/app/modules/timers/timers/timers.component';

const routes: Routes = [{ path: '', component: TimersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimersRoutingModule {}
