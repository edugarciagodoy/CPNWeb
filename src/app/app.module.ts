import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarMainComponent } from './layouts/public/main-component/navbar-main/navbar-main.component';
import { FooterMainComponent } from './layouts/public/main-component/footer-main/footer-main.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppComponent,
    NavbarMainComponent,
    FooterMainComponent
  ],
  providers: []
})
export class AppModule { }
