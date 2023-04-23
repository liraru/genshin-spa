import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShortenedDatetimePipeModule } from 'src/app/pipes/shortened-datetime/shortened-datetime-pipe.module';
import { FiveStarsHistoryComponent } from './five-stars-history/five-stars-history.component';

@NgModule({
  declarations: [FiveStarsHistoryComponent],
  imports: [CommonModule, ShortenedDatetimePipeModule],
  exports: [FiveStarsHistoryComponent]
})
export class FiveStarsHistoryModule {}
