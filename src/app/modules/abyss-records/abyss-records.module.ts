import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AbyssRecordsRoutingModule } from 'src/app/modules/abyss-records/abyss-records-routing.module';
import { AbyssRecordsComponent } from './abyss-records/abyss-records.component';

@NgModule({
  declarations: [AbyssRecordsComponent],
  imports: [CommonModule, AbyssRecordsRoutingModule]
})
export class AbyssRecordsModule {}
