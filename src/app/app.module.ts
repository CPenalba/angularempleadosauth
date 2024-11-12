import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { appRoutingProvider, routing } from './app.routing';
import { provideHttpClient } from '@angular/common/http';
import { PerfilempleadoComponent } from './components/perfilempleado/perfilempleado.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, LoginComponent, PerfilempleadoComponent],
  imports: [BrowserModule, routing, FormsModule],
  providers: [appRoutingProvider, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
