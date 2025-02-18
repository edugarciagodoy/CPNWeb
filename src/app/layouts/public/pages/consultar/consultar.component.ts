import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-consultar',
  imports: [],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {
  puntosDeInteres:string[] = [];
  filtroSeleccionado:number = 0;
  filtroAnterior_Id:string = "";
  filtroSeleccionado_Id:string = "";

  seleccionArray:string[][] = [];

  constructor(private renderer: Renderer2) { }

  ngOnInit():void {
    this.puntosDeInteres.push('Hospitales a nivel nacional', 'Estaciones de bomberos a nivel nacional', 'Aeropuertos a nivel nacional', 'Escuelas públicas a nivel nacional', 'Bases militares a nivel nacional')

    console.log(this.puntosDeInteres)

    this.insertarFiltrosPuntoDeInteres();
  }

  insertarFiltrosPuntoDeInteres(){
    const container_puntosdeinteres = <HTMLDivElement> document.getElementById("filtros-label-principales");
    console.log(container_puntosdeinteres);
    for (var i = 0; i < this.puntosDeInteres.length; i++) {
      //Agregar DIV
      var puntosdeinteres = document.createElement("div");
      puntosdeinteres.setAttribute("id", "puntosdeinteres-" + i);
      puntosdeinteres.setAttribute("class", "btn-parametro-busqueda");
      puntosdeinteres.addEventListener("click", (event) => this.filtroSeleccion(event));

      console.log(puntosdeinteres);

      container_puntosdeinteres.appendChild(puntosdeinteres);

      //Agregar SPAN
      var puntosdeinteres_texto = document.createElement("span");
      puntosdeinteres.appendChild(puntosdeinteres_texto);
      puntosdeinteres_texto.textContent = this.puntosDeInteres[i];
    }
  }

  filtroSeleccion(filtro:any) {
    let componenteSeleccionado = filtro.target;
    let filtroSeleccionado_Id = "";
    let filtroSeleccionadoPadre_Id = "";
    
    if (componenteSeleccionado.tagName == 'SPAN'){
      filtroSeleccionado_Id = componenteSeleccionado.parentNode.id;
      filtroSeleccionadoPadre_Id = componenteSeleccionado.parentNode.parentNode.id;
    }
    else{
      filtroSeleccionado_Id = componenteSeleccionado.id;
      filtroSeleccionadoPadre_Id = componenteSeleccionado.parentNode.id;
    }
    
    const componenteFiltroSeleccionado = <HTMLDivElement> document.getElementById(filtroSeleccionado_Id);
    var arrayLocation = 0;

    console.log('seleccionArray: ' + this.seleccionArray.length);

    if (this.seleccionArray.length == 0) {
      this.renderer.addClass(componenteFiltroSeleccionado, 'btn-parametro-busqueda-seleccionado');

      this.filtroAnterior_Id = filtroSeleccionado_Id;
      console.log('filtroSeleccionadoPadre_Id: ', filtroSeleccionadoPadre_Id);
      console.log(this.seleccionArray);

      this.seleccionArray.push([filtroSeleccionadoPadre_Id, filtroSeleccionado_Id]);
    }
    else {
      for(var i = 0; i < this.seleccionArray.length; i++) {
        console.log(this.seleccionArray[i]);

        for(var j = 0; j < this.seleccionArray[i].length; j++) {
          console.log(this.seleccionArray[i][1])
          if (this.seleccionArray[i][1] == filtroSeleccionado_Id) {
            this.filtroAnterior_Id = "";
            arrayLocation = i;
          }
          else {
            this.renderer.addClass(componenteFiltroSeleccionado, 'btn-parametro-busqueda-seleccionado');
  
            this.filtroAnterior_Id = filtroSeleccionado_Id;    
            this.seleccionArray.push([filtroSeleccionadoPadre_Id, filtroSeleccionado_Id]);
          }
        }

      }

      console.log(this.seleccionArray[arrayLocation][0]);

      const componenteFiltroAnterior = <HTMLDivElement> document.getElementById(this.filtroAnterior_Id);

      this.renderer.removeClass(componenteFiltroAnterior, 'btn-parametro-busqueda-seleccionado');

      if (this.filtroAnterior_Id == filtroSeleccionado_Id) {
        this.filtroAnterior_Id = "";
      }
      else if (this.filtroAnterior_Id != filtroSeleccionado_Id) {
        this.renderer.addClass(componenteFiltroSeleccionado, 'btn-parametro-busqueda-seleccionado');
  
        this.filtroAnterior_Id = filtroSeleccionado_Id;
      }
    }

    // if (filtroSeleccionado_Id[0][0] == "")

    // if (this.filtroAnterior_Id == "") {
    //   this.renderer.addClass(componenteFiltroSeleccionado, 'btn-parametro-busqueda-seleccionado');

    //   this.filtroAnterior_Id = filtroSeleccionado_Id
    // }
    // else{
    //   const componenteFiltroAnterior = <HTMLDivElement> document.getElementById(this.filtroAnterior_Id);

    //   this.renderer.removeClass(componenteFiltroAnterior, 'btn-parametro-busqueda-seleccionado');

    //   if (this.filtroAnterior_Id == filtroSeleccionado_Id) {
    //     this.filtroAnterior_Id = "";
    //   }
    //   else if (this.filtroAnterior_Id.length > 0 && this.filtroAnterior_Id != filtroSeleccionado_Id) {
    //     this.renderer.addClass(componenteFiltroSeleccionado, 'btn-parametro-busqueda-seleccionado');
  
    //     this.filtroAnterior_Id = filtroSeleccionado_Id;
    //   }
    // }
  }

  visibilidadDeElementos(componenteSeleccionado:string) {
    if (componenteSeleccionado == 'btn-parametro-codigo-postal'){
      const filtroComponenteSeleccionado_Antes = <HTMLInputElement> document.getElementById(componenteSeleccionado);
      this.renderer.removeAttribute(filtroComponenteSeleccionado_Antes, "hidden")
    }
  }
}
