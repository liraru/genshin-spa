import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimersRoutingModule } from 'src/app/modules/timers/timers-routing.module';
import { TimersComponent } from './timers/timers.component';

@NgModule({
  declarations: [TimersComponent],
  imports: [CommonModule, TimersRoutingModule]
})
export class TimersModule {}
