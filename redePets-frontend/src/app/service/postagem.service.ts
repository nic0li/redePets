import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  serverPort = environment.server + environment.port;

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", localStorage.getItem("token") || "")
  }

  getAllPostagem(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${this.serverPort}/postagens`, this.token);
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`${this.serverPort}/postagens/${id}`, this.token);
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${this.serverPort}/postagens/titulo/${titulo}`, this.token);
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(`${this.serverPort}/postagens`, postagem, this.token);
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(`${this.serverPort}/postagens`, postagem, this.token);
  }

  deletePostagem(id: number) {
    return this.http.delete(`${this.serverPort}/postagens/${id}`, this.token);
  }

}
