import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfilempleado',
  templateUrl: './perfilempleado.component.html',
  styleUrl: './perfilempleado.component.css',
})
export class PerfilempleadoComponent implements OnInit {
  public empleado!: Empleado;

  constructor(private _service: ServiceEmpleados, private _router: Router) {}

  cerrarSesion(): void {
    environment.token = '';
    this._router.navigate(['/']);
  }

  ngOnInit(): void {
    if (!environment.token) {
      this._router.navigate(['/']);
    } else {
      this._service.getPerfilEmpleado().subscribe((response) => {
        this.empleado = response;
      });
    }
  }
}
