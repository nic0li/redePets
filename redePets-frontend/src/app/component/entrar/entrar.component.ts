import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/model/UsuarioLogin';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0);
    
    setTimeout(() => {
      this.limpar();
    });
  }

  entrar(){
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) =>{
      this.usuarioLogin = resp;

      localStorage.setItem("token", this.usuarioLogin.token);
      environment.nome = this.usuarioLogin.nome;
      environment.foto = this.usuarioLogin.foto;
      environment.id = this.usuarioLogin.id;
      environment.tipo = this.usuarioLogin.tipo;

      this.router.navigate(['/inicio']);
    }, err => {

      if(err.status == 500){
        this.alertas.showAlertDanger("Usuário ou senha incorretos!");
      }
    })
  }

  limpar() {
    localStorage.removeItem("token");
    environment.id = 0;
    environment.nome = "";
    environment.foto = "";
    environment.tipo = "";
  }

}
