import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema;
  listaTemas: Tema[];

  constructor(
    private router: Router,
    private temaService:TemaService,
    private alertas:AlertasService
  ) { }

  ngOnInit() {

    window.scroll(0,0);

    if(environment.token == ''){

      this.router.navigate(['/entrar']);
    }

    this.findAllTemas();

  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp:Tema[])=>{
      this.listaTemas = resp;
    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp:Tema)=>{
      this.tema = resp;
     this.alertas.showAlertSuccess("Tema cadastrado com sucesso!");
      this.findAllTemas();
      this.tema = new Tema();
    })
  }

}
