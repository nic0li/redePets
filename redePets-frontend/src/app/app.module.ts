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
    TemaEditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
