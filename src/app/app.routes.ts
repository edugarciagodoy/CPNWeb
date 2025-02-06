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
import { SalirComponent } from './layouts/public/pages/salir/salir.component';

export const routes: Routes = [
    // { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirección si la ruta no existe
    { path: 'home', component: HomeComponent }, // Página principal
    { path: 'comobuscar', component: ComobuscarComponent },
    { path: 'consultar', component: ConsultarComponent },
    { path: 'contactenos', component: ContactenosComponent },
    { path: 'definicion', component: DefinicionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'mantenimiento', component: MantenimientoComponent },
    { path: 'solicitarusuario', component: SolicitarusuarioComponent },
    { path: 'micuenta', component: MicuentaComponent },
    { path: 'gestiondeusuarios', component: GestiondeusuariosComponent },
    { path: 'salir', component: SalirComponent }
];
