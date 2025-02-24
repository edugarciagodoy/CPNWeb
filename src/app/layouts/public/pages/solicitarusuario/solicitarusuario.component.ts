import {Component, inject, Renderer2} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AsyncPipe, CommonModule} from '@angular/common';

@Component({
  selector: 'app-solicitarusuario',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './solicitarusuario.component.html',
  styleUrl: './solicitarusuario.component.css'
})
export class SolicitarusuarioComponent {
  datos:any[] = [];
  // Seleccionamos o iniciamos el valor '0' del <select>
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';

  constructor(private renderer: Renderer2) { 
    this.datos = ['DNI', 'LE'];
  }  

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion

    console.log(this.datos)

    this.verSeleccion = this.opcionSeleccionado;
  }

  verificarUsuario() {
    const nroDocumentoDeIdentidad = <HTMLInputElement> document.getElementById("nroDocumentoDeIdentidad");
    let nroDocumentoDeIdentidadValue = nroDocumentoDeIdentidad.value;
    // let pass_02 = input.target.value;
    // console.log('valor  ' + pass_01, pass_02);

    console.log('nroDocumentoDeIdentidad', nroDocumentoDeIdentidad);
    console.log('nroDocumentoDeIdentidadValue', nroDocumentoDeIdentidadValue);

    if (nroDocumentoDeIdentidadValue.length == 0){
      this.renderer.removeClass(nroDocumentoDeIdentidad, 'is-valid');
      this.renderer.addClass(nroDocumentoDeIdentidad, 'is-invalid');
    }
    else {
      this.renderer.removeClass(nroDocumentoDeIdentidad, 'is-invalid');
      this.renderer.addClass(nroDocumentoDeIdentidad, 'is-valid');
    }
  }


  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


}
