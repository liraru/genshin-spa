import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShortenedDatetimePipe } from 'src/app/pipes/shortened-datetime/shortened-datetime.pipe';

@NgModule({
  declarations: [ShortenedDatetimePipe],
  imports: [CommonModule],
  exports: [ShortenedDatetimePipe]
})
export class ShortenedDatetimePipeModule {}
