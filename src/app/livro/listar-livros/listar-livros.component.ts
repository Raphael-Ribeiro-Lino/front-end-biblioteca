import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Livro } from './../livro';
import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { MessagesService } from 'src/app/messages/messages.service';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  livros: Livro[] = [];
  baseApiUrl = environment.baseApiURL;

  constructor(private livroService: LivroService, private router: Router, private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.livroService.listaLivros().subscribe({
      next: (resultado) => {
        this.livros = resultado as Livro[];
      },
      error: (erro) => {
        alert("Desculpe! Houve um erro ao buscar os livros, tente novamente mais tarde!");
        console.log(erro);
      }
    });
  }

  async removeHandler(id: number){
    await this.livroService.removerLivro(id).subscribe();

    this.messagesService.add("Livro excluído com sucesso!");
    this.router.navigate(['/listar-livros']);

  }

}
