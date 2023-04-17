import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANG } from './constants/languages.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'genshin-spa';
  constructor(private readonly _translate: TranslateService) {
    this._translate.setDefaultLang(LANG.ES);
    this._translate.use(LANG.ES);
  }
}
