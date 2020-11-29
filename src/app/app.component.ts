import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const defaultLang = 'en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public translate: TranslateService
  ) {
    translate.setDefaultLang(defaultLang);
  }
}
