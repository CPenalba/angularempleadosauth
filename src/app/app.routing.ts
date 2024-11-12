import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { PerfilempleadoComponent } from './components/perfilempleado/perfilempleado.component';
import { SubordinadosComponent } from './components/subordinados/subordinados.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'perfilempleado', component: PerfilempleadoComponent },
  { path: 'subordinados', component: SubordinadosComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
