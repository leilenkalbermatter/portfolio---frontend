import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Las siguientes importaciones ya no son necesarias para un sitio estático
// import { LoginUser } from 'src/app/model/login-user';
// import { AuthService } from 'src/app/services/auth.service';
// import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  // loginUser!: LoginUser;
  userName!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  // El constructor ahora solo necesita el Router si quieres redirigir
  // Se eliminan AuthService y TokenService
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Toda la lógica de chequear el token se va.
    // Siempre asumimos que no estamos logueados.
    this.isLogged = false;
    this.isLogginFail = false;
  }

  onLogin(): void {
    // La función de login ya no intenta conectar con el backend.
    // Simplemente puedes mostrar un mensaje y/o redirigir al inicio.
    alert("La función de login está desactivada en esta versión estática del portfolio.");
    this.router.navigate(['']);
  }
}
