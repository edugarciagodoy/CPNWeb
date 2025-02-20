import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/public/pages/home/home.component';
import { ComobuscarComponent } from './layouts/public/pages/comobuscar/comobuscar.component';
import { ConsultarComponent } from './layouts/public/pages/consultar/consultar.component';
import { ContactenosComponent } from './layouts/public/pages/contactenos/contactenos.component';
import { DefinicionComponent } from './layouts/public/pages/definicion/definicion.component';
import { LoginComponent } from './layouts/public/pages/login/login.component';
import { MantenimientoComponent } from './layouts/public/pages/mantenimiento/mantenimiento.component';
import { SolicitarusuarioComponent } from './layouts/public/pages/solicitarusuario/solicitarusuario.component';
import { MicuentaComponent } from './layouts/public/pages/micuenta/micuenta.component';
import { GestiondeusuariosComponent } from './layouts/public/pages/gestiondeusuarios/gestiondeusuarios.component';
import { LogoutComponent } from './layouts/public/pages/logout/logout.component';
import { RecuperarclaveComponent } from './layouts/public/pages/recuperarclave/recuperarclave.component';
import { IngresadigitosComponent } from './layouts/public/pages/ingresadigitos/ingresadigitos.component';
import { NuevaclaveComponent } from './layouts/public/pages/nuevaclave/nuevaclave.component';
import { Comobuscar2Component } from './layouts/public/pages/comobuscar2/comobuscar2.component';
import { CuentarecuperadaComponent } from './layouts/public/pages/cuentarecuperada/cuentarecuperada.component';

export const routes: Routes = [
    // { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Redirección si la ruta no existe
    { path: 'home', component: HomeComponent }, // Página principal
    { path: 'comobuscar', component: ComobuscarComponent },
    { path: 'comobuscar2', component: Comobuscar2Component }, //TEMPORAL
    { path: 'consultar', component: ConsultarComponent },
    { path: 'contactenos', component: ContactenosComponent },
    { path: 'definicion', component: DefinicionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'mantenimiento', component: MantenimientoComponent },
    { path: 'solicitarusuario', component: SolicitarusuarioComponent },
    { path: 'micuenta', component: MicuentaComponent },
    { path: 'gestiondeusuarios', component: GestiondeusuariosComponent },
    { path: 'recuperarclave', component: RecuperarclaveComponent },
    { path: 'ingresadigitos', component: IngresadigitosComponent },
    { path: 'nuevaclave', component: NuevaclaveComponent },
    { path: 'cuentarecuperada', component: CuentarecuperadaComponent }
];
