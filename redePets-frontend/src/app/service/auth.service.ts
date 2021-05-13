import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverPort = environment.server + environment.port;

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin> (`${this.serverPort}/usuarios/entrar`, usuarioLogin);
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario> (`${this.serverPort}/usuarios/cadastrar`, usuario);
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.serverPort}/usuarios/${id}`);
  }

  logado(){
    let ok: boolean = false;

    if(localStorage.getItem("token") != null){
      ok = true;
    }

    return ok;
  }

  admin() {
    let ok: boolean = false;

    if (environment.tipo == "admin") {
      ok = true;
    }

    return ok;
  }

}
