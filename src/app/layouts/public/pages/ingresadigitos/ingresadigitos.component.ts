import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresadigitos',
  imports: [],
  templateUrl: './ingresadigitos.component.html',
  styleUrl: './ingresadigitos.component.css'
})
export class IngresadigitosComponent {
  valores: number[] = [];

  constructor(private router: Router) { }

  verificarDigitos(): void {
    const inputElement = <HTMLInputElement> document.getElementById("digito-texto-01")

    console.log(inputElement);
  }



  onKeyUp(input:any){
    console.log('conteo inicial ' + this.valores.length)
    console.log('array inicial ' + this.valores)
    let valor = input.target.value;
    this.valores.push(valor);
    console.log('conteo final ' + this.valores.length)
    console.log('array final ' + this.valores)
    
    console.log('valor  ' + valor);

    if (this.valores.length == 5){
      console.log('all good');
      this.router.navigate(['/nuevaclave'])
    }

    if (valor.length > 0){
      console.log('check')
      
      let element;
      
      if (input.code !== 'Backspace')
        element = input.srcElement.nextElementSibling;

      if (input.code === 'Backspace')
        element = input.srcElement.previousElementSibling;

      if(element == null)
        return;
      else
        element.focus();
    }

    // console.log('array ' + this.valores)
    // console.log('conteo ' + this.valores.length)

    // if (this.valores.length == 5){
    //   console.log('all good ' + this.valores.length)
    // }

    // console.log('valor' + valor);
    // console.log('valor.length' + valor.length);
  }
}
