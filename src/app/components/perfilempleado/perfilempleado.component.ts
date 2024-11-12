import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-perfilempleado',
  templateUrl: './perfilempleado.component.html',
  styleUrl: './perfilempleado.component.css',
})
export class PerfilempleadoComponent implements OnInit {
  public empleado!: Empleado;

  constructor(private _service: ServiceEmpleados) {}

  ngOnInit(): void {
    this._service.getPerfilEmpleado().subscribe((response) => {
      this.empleado = response;
    });
  }
}
