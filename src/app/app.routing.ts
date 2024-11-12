import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { PerfilempleadoComponent } from './components/perfilempleado/perfilempleado.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'perfilempleado', component: PerfilempleadoComponent },
  //   { path: 'create', component: CreateComponent },
  //   { path: 'details/:id/:nombre/:localidad', component: DetailsComponent },
  //   { path: 'edit/:id', component: EditComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
