import { Component, OnInit } from '@angular/core';

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

  }

}
