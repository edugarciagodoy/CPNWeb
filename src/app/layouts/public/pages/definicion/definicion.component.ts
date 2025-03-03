import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-definicion',
  imports: [],
  templateUrl: './definicion.component.html',
  styleUrl: './definicion.component.css'
})
export class DefinicionComponent {
  environmentUrl = environment.imageUrl;
}
