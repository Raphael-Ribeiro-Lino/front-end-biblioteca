import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAutorComponent } from './autor/cadastro-autor/cadastro-autor/cadastro-autor.component';
import { EditarAutorComponent } from './autor/editar-autor/editar-autor.component';
import { ListarAutoresComponent } from './autor/listar-autores/listar-autores/listar-autores.component';
import { CadastraLivroComponent } from './livro/cadastra-livro/cadastra-livro.component';
import { ListarLivrosComponent } from './livro/listar-livros/listar-livros.component';

const routes: Routes = [
  {path: '', component: ListarAutoresComponent},
  {path: 'cadastrar-autor', component: CadastroAutorComponent},
  {path: 'editar-autor/:id', component: EditarAutorComponent},
  {path: 'cadastrar-livro', component: CadastraLivroComponent},
  {path: 'listar-livros', component: ListarLivrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
