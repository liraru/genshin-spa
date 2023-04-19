import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LANG } from './constants/languages.constant';
import { FooterModule } from './modules/footer/footer.module';
import { MainMenuModule } from './modules/main-menu/main-menu.module';
import { NavbarModule } from './modules/navbar/navbar.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainMenuModule,
    NavbarModule,
    FooterModule,
    // * LIBRERIES * //
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: LANG.ES,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
