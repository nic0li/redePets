import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: Usuario = new Usuario();
  senha: string;
  tipo: string;
  idUsuario: number;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    window.scroll(0,0);

    if (localStorage.getItem("token") == null) {
      this.alertas.showAlertInfo("Sua sessão expirou! Faça o login novamente.");
      this.router.navigate(["/entrar"]);
    }

    this.idUsuario = this.route.snapshot.params["id"];
    this.findByIdUsuario(this.idUsuario);

  }

  confirmarSenha(event: any) {
    this.senha = event.target.value;
  }

  tipoUsuario(event: any) {
    this.tipo = event.target.value;
  }

  atualizar() {
    this.usuario.tipo = this.tipo;

    if (this.usuario.senha != this.senha) {
      this.alertas.showAlertDanger("As senhas não coincidem.")
    }
    else {
      this.authService.cadastrar(this.usuario).subscribe((response: Usuario) => {
        this.usuario = response;
        this.router.navigate(["/inicio"]);
        this.alertas.showAlertInfo("Usuário atualizado com sucesso. Faça o login novamente!");
        localStorage.removeItem("token");
        environment.id = 0;
        environment.nome = "";
        environment.foto = "";
        environment.tipo = "";
        this.router.navigate(["/entrar"]);
      });
    }
  }

  findByIdUsuario(id: number) {
    this.authService.getByIdUsuario(id).subscribe((response: Usuario) => {
      this.usuario = response;
    });
  }

}
