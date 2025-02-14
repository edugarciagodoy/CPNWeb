import { Component, Renderer2 } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevaclave',
  imports: [],
  templateUrl: './nuevaclave.component.html',
  styleUrl: './nuevaclave.component.css'
})
export class NuevaclaveComponent {


  constructor(private renderer: Renderer2, private router: Router) { }

  onKeyUp(input:any){
    const pass_01_element = <HTMLInputElement> document.getElementById("nc-pass-01");
    let pass_01 = pass_01_element.value;
    let pass_02 = input.target.value;
    // console.log('valor  ' + pass_01, pass_02);

    if (pass_01.length > 0 && pass_02.length > 0){
      if (pass_02 != pass_01){
        // console.log('diferentes');
        this.renderer.addClass(input.target, 'is-invalid');
        // pass_01_element.add.className('is-invalid');
      }
      else{
        // console.log('iguales')
        this.renderer.removeClass(input.target, 'is-invalid');
      }
    }
  }

  guardarNuevaClave(){
    const pass_01_element = <HTMLInputElement> document.getElementById("nc-pass-01");
    const pass_02_element = <HTMLInputElement> document.getElementById("nc-pass-02");
    
    let pass_01 = pass_01_element.value;
    let pass_02 = pass_02_element.value;

    if (pass_01 == pass_02){
      this.router.navigate(['/cuentarecuperada'])
    }
  }
}
