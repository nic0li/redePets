import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioDeslogadoComponent } from './inicio-deslogado/inicio-deslogado.component';
import { InicioLogadoComponent } from './inicio-logado/inicio-logado.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'inicio-deslogado', pathMatch: 'full'},
  {path: 'entrar', component: EntrarComponent },
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'inicio-deslogado', component: InicioDeslogadoComponent},
  {path: 'inicio-logado', component: InicioLogadoComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'rodape', component: RodapeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
