import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio-deslogado',
  templateUrl: './inicio-deslogado.component.html',
  styleUrls: ['./inicio-deslogado.component.css']
})
export class InicioDeslogadoComponent implements OnInit {

  constructor(

    private router: Router
  ) { }

  ngOnInit() {

    if(environment.token == ''){

      this.router.navigate(['/entrar'])
    }
  }

}
