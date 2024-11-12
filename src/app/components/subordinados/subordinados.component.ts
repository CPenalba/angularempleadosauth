import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css',
})
export class SubordinadosComponent implements OnInit {
  public empleados!: Array<Empleado>;

  constructor(private _service: ServiceEmpleados) {}

  ngOnInit(): void {
    this._service.getSubordinados().subscribe((response) => {
      this.empleados = response;
    });
  }
}
