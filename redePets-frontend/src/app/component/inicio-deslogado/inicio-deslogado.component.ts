import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio-deslogado',
  templateUrl: './inicio-deslogado.component.html',
  styleUrls: ['./inicio-deslogado.component.css']
})
export class InicioDeslogadoComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
    window.scroll(0,0);

    setTimeout(() => {
      this.limpar();
    });
  }

  limpar() {
    localStorage.removeItem("token");
    environment.id = 0;
    environment.nome = "";
    environment.foto = "";
    environment.tipo = "";
  }

}
