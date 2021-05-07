import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio-logado',
  templateUrl: './inicio-logado.component.html',
  styleUrls: ['./inicio-logado.component.css']
})
export class InicioLogadoComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(){

    if(environment.token == ''){

      this.router.navigate(['/entrar'])
    }
  }

}
