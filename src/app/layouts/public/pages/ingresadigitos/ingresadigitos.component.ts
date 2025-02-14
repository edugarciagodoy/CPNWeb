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
  randomNumber: number = 0;

  constructor(private router: Router) { }

  verificarDigitos(): void {
    const inputElement = <HTMLInputElement> document.getElementById("digito-texto-01")

    console.log(inputElement);
  }

  ngOnInit():void{
    this.randomNumber = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
    console.log(this.randomNumber);
  }

  onKeyUp(input:any){
    // console.log('conteo inicial ' + this.valores.length)
    // console.log('array inicial ' + this.valores)
    let valor = input.target.value;
    // this.valores.push(valor);
    // console.log('conteo final ' + this.valores.length)
    // console.log('array final ' + this.valores)
    // this.valores.pop();
    this.valores.splice(0, this.valores.length);

    const digito_texto_01_element = <HTMLInputElement> document.getElementById("digito-texto-01");
    const digito_texto_02_element = <HTMLInputElement> document.getElementById("digito-texto-02");
    const digito_texto_03_element = <HTMLInputElement> document.getElementById("digito-texto-03");
    const digito_texto_04_element = <HTMLInputElement> document.getElementById("digito-texto-04");
    const digito_texto_05_element = <HTMLInputElement> document.getElementById("digito-texto-05");
    
    let digito_texto_01 = digito_texto_01_element.value;
    let digito_texto_02 = digito_texto_02_element.value;
    let digito_texto_03 = digito_texto_03_element.value;
    let digito_texto_04 = digito_texto_04_element.value;
    let digito_texto_05 = digito_texto_05_element.value;

    if (digito_texto_01.length > 0)
      this.valores.push(Number(digito_texto_01));
    if (digito_texto_02.length > 0)
      this.valores.push(Number(digito_texto_02));
    if (digito_texto_03.length > 0)
      this.valores.push(Number(digito_texto_03));
    if (digito_texto_04.length > 0)
      this.valores.push(Number(digito_texto_04));
    if (digito_texto_05.length > 0)
      this.valores.push(Number(digito_texto_05));


    // console.log('conteo cero ' + this.valores.length)
    // console.log('array vacío ' + this.valores)
    
    // console.log('valor  ' + valor);

    if (this.valores.length == 5){
      var inputValue = this.valores.toString().split(',').join("");
      // console.log('all good', inputValue);
      if (Number(inputValue) == this.randomNumber){
        this.router.navigate(['/nuevaclave']);
      }
      // else{
      //   console.log('No son iguales');
      // }
    }

    if (valor.length > 0){
      // console.log('check')
      
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
