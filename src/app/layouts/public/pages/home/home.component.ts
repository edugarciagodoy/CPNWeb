import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { environment as environmentDev } from '../../../../../environments/environment.development';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  environmentUrl = environment.imageUrl;
}
