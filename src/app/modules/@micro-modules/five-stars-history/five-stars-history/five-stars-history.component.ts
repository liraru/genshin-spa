import { Component, Input } from '@angular/core';
import { IPull } from 'src/app/interfaces/wish-history/pull.interface';

@Component({
  selector: 'app-five-stars-history',
  templateUrl: './five-stars-history.component.html',
  styleUrls: ['./five-stars-history.component.scss']
})
export class FiveStarsHistoryComponent {
  @Input() data: IPull[] = [];
}
