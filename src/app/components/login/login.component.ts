import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Login } from '../../models/login';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  @ViewChild('cajausername') cajaUsername!: ElementRef;
  @ViewChild('cajapassword') cajaPassword!: ElementRef;
  public login!: Login;

  constructor(private _service: ServiceEmpleados, private _router: Router) {}

  hacerLogin(): void {
    var username = this.cajaUsername.nativeElement.value;
    var password = this.cajaPassword.nativeElement.value;

    this.login = new Login(username, password);
    this._service.login(this.login).subscribe(
      (response) => {
        environment.token = response.response;
        console.log(environment.token);
        this._router.navigate(['/perfilempleado']);
      },
      () => {
        alert(
          'Usuario o contraseña incorrectos, por favor intente nuevamente.'
        );
      }
    );
  }

  ngOnInit(): void {
    environment.token = '';
  }
}
