import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroAutorComponent } from './autor/cadastro-autor/cadastro-autor/cadastro-autor.component';
import { FormAutorComponent } from './autor/form-autor/form-autor.component';
import { MessagesComponent } from './messages/messages.component';
import { ListarAutoresComponent } from './autor/listar-autores/listar-autores/listar-autores.component';
import { HeaderComponent } from './header/header.component';
import { EditarAutorComponent } from './autor/editar-autor/editar-autor.component';
import { CadastraLivroComponent } from './livro/cadastra-livro/cadastra-livro.component';
import { FormLivroComponent } from './livro/form-livro/form-livro.component';
import { ListarLivrosComponent } from './livro/listar-livros/listar-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAutorComponent,
    FormAutorComponent,
    MessagesComponent,
    ListarAutoresComponent,
    HeaderComponent,
    EditarAutorComponent,
    CadastraLivroComponent,
    FormLivroComponent,
    ListarLivrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
