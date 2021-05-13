import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario;
  senha: string;
  tipo: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0);
  }

  confirmarSenha(event: any){
    this.senha = event.target.value;
  }

  tipoUsuario(event: any){
    this.tipo = event.target.value;
  }

  cadastrar(){
    this.usuario.tipo = this.tipo;

    if(this.usuario.senha != this.senha){
      this.alertas.showAlertDanger("As senhas não conferem!");
    }
    else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/entrar']);
        this.alertas.showAlertSuccess("Usuário cadastrado com sucesso!");
      })
    }
  }

}
