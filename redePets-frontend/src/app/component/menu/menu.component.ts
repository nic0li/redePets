import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  id = environment.id;
  nome = environment.nome;
  foto = environment.foto;
  tipo = environment.tipo;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {



  }

  sair(){
    this.router.navigate(['/entrar']);
    localStorage.removeItem("token");
    environment.nome = '';
    environment.foto = '';
    environment.id = 0;
    environment.tipo = '';
  }

}
