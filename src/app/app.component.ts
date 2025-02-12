import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarMainComponent } from './layouts/public/main-component/navbar-main/navbar-main.component';
import { FooterMainComponent } from './layouts/public/main-component/footer-main/footer-main.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, NavbarMainComponent, FooterMainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CPN';
  
}
