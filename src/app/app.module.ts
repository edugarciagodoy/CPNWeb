import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarMainComponent } from './layouts/public/main-component/navbar-main/navbar-main.component';
import { FooterMainComponent } from './layouts/public/main-component/footer-main/footer-main.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppComponent,
    NavbarMainComponent,
    FooterMainComponent,
    MatDatepickerModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }

  ]
})
export class AppModule { }
