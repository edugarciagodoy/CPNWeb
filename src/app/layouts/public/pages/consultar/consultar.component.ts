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
  filtroSeleccionado_Id:string = "";

  constructor(private renderer: Renderer2) { }

  ngOnInit():void {
    this.puntosDeInteres.push('Hospitales a nivel nacional', 'Estaciones de bomberos a nivel nacional', 'Aeropuertos a nivel nacional', 'Escuelas públicas a nivel nacional', 'Bases militares a nivel nacional')

    console.log(this.puntosDeInteres)

    this.insertarFiltrosPuntoDeInteres();
  }

  insertarFiltrosPuntoDeInteres(){
    const container_puntosdeinteres = <HTMLDivElement> document.getElementById("container-puntosdeinteres");

    for (var i = 0; i < this.puntosDeInteres.length; i++) {
      //Agregar DIV
      var puntosdeinteres = document.createElement("div");
      puntosdeinteres.setAttribute("id", "puntosdeinteres-" + i);
      puntosdeinteres.setAttribute("class", "btn-parametro-busqueda");
      puntosdeinteres.addEventListener("click", (event) => this.filtroSeleccion(event));
      container_puntosdeinteres.appendChild(puntosdeinteres);

      //Agregar SPAN
      var puntosdeinteres_texto = document.createElement("span");
      puntosdeinteres.appendChild(puntosdeinteres_texto);
      puntosdeinteres_texto.textContent = this.puntosDeInteres[i];
    }
  }

  filtroSeleccion(filtro:any){
    // if (this.filtroSeleccionado == 0) {

    // }

    let componenteSeleccionado = filtro.target;
    let componenteSeleccionado_Id = "";

    if (componenteSeleccionado.tagName == 'SPAN'){
      componenteSeleccionado_Id = componenteSeleccionado.parentNode.id;
    }
    else{
      componenteSeleccionado_Id = componenteSeleccionado.id;
    }

    const filtroComponenteSeleccionado = <HTMLInputElement> document.getElementById(componenteSeleccionado_Id);

    if (this.filtroSeleccionado_Id == "") {
      this.renderer.addClass(filtroComponenteSeleccionado, 'btn-parametro-busqueda-seleccionado');
      this.filtroSeleccionado_Id = filtroComponenteSeleccionado.id;
    }
    else{
      const filtroComponenteSeleccionado_Antes = <HTMLInputElement> document.getElementById(this.filtroSeleccionado_Id);

      this.renderer.removeClass(filtroComponenteSeleccionado_Antes, 'btn-parametro-busqueda-seleccionado');
      
      if (this.filtroSeleccionado_Id != componenteSeleccionado_Id) {
        this.renderer.addClass(filtroComponenteSeleccionado, 'btn-parametro-busqueda-seleccionado');
        this.filtroSeleccionado_Id = filtroComponenteSeleccionado.id;
      }
    }
  }

  visibilidadDeElementos(componenteSeleccionado:string) {
    if (componenteSeleccionado == 'btn-parametro-codigo-postal'){
      const filtroComponenteSeleccionado_Antes = <HTMLInputElement> document.getElementById(componenteSeleccionado);
      this.renderer.removeAttribute(filtroComponenteSeleccionado_Antes, "hidden")
    }
  }
}
