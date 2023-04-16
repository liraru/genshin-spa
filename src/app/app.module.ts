import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuModule } from './modules/main-menu/main-menu.module';
import { NavbarModule } from './modules/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MainMenuModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
