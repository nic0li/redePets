import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './component/cadastrar/cadastrar.component';
import { EntrarComponent } from './component/entrar/entrar.component';
import { InicioDeslogadoComponent } from './component/inicio-deslogado/inicio-deslogado.component';
import { InicioLogadoComponent } from './component/inicio-logado/inicio-logado.component';
import { TemaComponent } from './component/tema/tema.component';
import { TemaDeleteComponent } from './component/delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './component/edit/tema-edit/tema-edit.component';
import { PostagemEditComponent } from './component/edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './component/delete/postagem-delete/postagem-delete.component';
import { UsuarioEditComponent } from './component/edit/usuario-edit/usuario-edit.component';

const routes: Routes = [

  //{path: '', redirectTo: '', pathMatch: 'full'},

  {path: '', component: InicioDeslogadoComponent},
  {path: 'inicio', component: InicioLogadoComponent},

  {path: 'entrar', component: EntrarComponent },
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'usuario/edit/:id', component: UsuarioEditComponent},

  {path: 'tema', component: TemaComponent},
  {path: 'tema/edit/:id', component: TemaEditComponent},
  {path: 'tema/delete/:id', component: TemaDeleteComponent},
  {path: 'postagem/edit/:id',component:PostagemEditComponent},
  {path: 'postagem/delete/:id',component:PostagemDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
