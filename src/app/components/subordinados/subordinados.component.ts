import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css',
})
export class SubordinadosComponent implements OnInit {
  public empleados!: Array<Empleado>;

  constructor(private _service: ServiceEmpleados, private _router: Router) {}

  ngOnInit(): void {
    if (!environment.token) {
      this._router.navigate(['/']);
    } else {
      this._service.getSubordinados().subscribe((response) => {
        this.empleados = response;
      });
    }
  }
}
