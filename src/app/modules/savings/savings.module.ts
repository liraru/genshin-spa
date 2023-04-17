import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SavingsRoutingModule } from './savings-routing.module';
import { SavingsComponent } from './savings/savings.component';

@NgModule({
  declarations: [SavingsComponent],
  imports: [CommonModule, SavingsRoutingModule]
})
export class SavingsModule {}
