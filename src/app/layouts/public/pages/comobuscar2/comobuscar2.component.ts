import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-comobuscar2',
  imports: [],
  templateUrl: './comobuscar2.component.html',
  styleUrl: './comobuscar2.component.css'
})
export class Comobuscar2Component {
  imageUrl = environment.imageUrl;
  videoUrl = environment.videoUrl;
}
