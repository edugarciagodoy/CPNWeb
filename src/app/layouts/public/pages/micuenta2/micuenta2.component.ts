import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { PersonaService } from '../../../../core/services/persona.service';
import { Persona, Trabajador } from '../../../../core/models/persona-model';

@Component({
  selector: 'app-micuenta2',
  imports: [
    CommonModule
  ],
  templateUrl: './micuenta2.component.html',
  styleUrl: './micuenta2.component.css'
})
export class Micuenta2Component {
  datosUsuario: Array<Persona> = [
    {
      id: 1,
      tipoDocumentoDeIdentidad: 'DNI',
      documentoDeIdentidad: '45678912',
      apellidoPaterno: 'García',
      apellidoMaterno: 'Godoy',
      nombre: 'Eduardo',
      nroCelular: '985746321',
      departamento: 'Lima',
      provincia: 'Lima',
      distrito: 'Lima',
      direccion: 'Jirón Zorritos N° 1203'
    },
  ]

  datosTrabajador: Array<Trabajador> = [
    {
      id: 1,
      nroDocumento: '45612378912345',
      razonSocial: 'Shalom',
      correoInstitucional: 'egarcia@shalom.com',
      nroCelular: '965872341',
      departamento: 'Lima',
      provincia: 'Lima',
      distrito: 'Lima',
      direccion: 'Av. Venezuela 1670' 
    }
  ]

  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
    this.datosUsuario;
  }

}
