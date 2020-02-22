import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormCategoriasComponent } from './categorias/form-categorias/form-categorias.component';
import { ListaCategoriasComponent } from './categorias/lista-categorias/lista-categorias.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';
import { ListaOrdenesComponent } from './ordenes-de-compra/lista-ordenes/lista-ordenes.component';
import { FormPlatosComponent } from './platos/form-platos/form-platos.component';
import { ListaPlatosComponent } from './platos/lista-platos/lista-platos.component';
import { FormUsuariosComponent } from './usuarios/form-usuarios/form-usuarios.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCategoriasComponent,
    ListaCategoriasComponent,
    ListaClientesComponent,
    FormClientesComponent,
    ListaOrdenesComponent,
    FormPlatosComponent,
    ListaPlatosComponent,
    FormUsuariosComponent,
    ListaUsuariosComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
