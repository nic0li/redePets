import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { RodapeComponent } from './component/rodape/rodape.component';
import { EntrarComponent } from './component/entrar/entrar.component';
import { CadastrarComponent } from './component/cadastrar/cadastrar.component';
import { InicioDeslogadoComponent } from './component/inicio-deslogado/inicio-deslogado.component';
import { InicioLogadoComponent } from './component/inicio-logado/inicio-logado.component';
import { FormsModule } from '@angular/forms';
import { TemaComponent } from './component/tema/tema.component';
import { TemaDeleteComponent } from './component/delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './component/edit/tema-edit/tema-edit.component';
import { PostagemEditComponent } from './component/edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './component/delete/postagem-delete/postagem-delete.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { AlertasComponent } from './component/alertas/alertas.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioDeslogadoComponent,
    InicioLogadoComponent,
    TemaComponent,
    TemaDeleteComponent,
    TemaEditComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    AlertasComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
