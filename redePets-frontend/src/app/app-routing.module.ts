import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './component/cadastrar/cadastrar.component';
import { EntrarComponent } from './component/entrar/entrar.component';
import { InicioDeslogadoComponent } from './component/inicio-deslogado/inicio-deslogado.component';
import { InicioLogadoComponent } from './component/inicio-logado/inicio-logado.component';
import { MenuComponent } from './component/menu/menu.component';
import { RodapeComponent } from './component/rodape/rodape.component';

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
