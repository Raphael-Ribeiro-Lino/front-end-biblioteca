import { Livro } from './../livro';
import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/autor/autor';
import { AutorService } from 'src/app/services/autor.service';
import { LivroService } from 'src/app/services/livro.service';
import { MessagesService } from 'src/app/messages/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-livro',
  templateUrl: './cadastra-livro.component.html',
  styleUrls: ['./cadastra-livro.component.css']
})
export class CadastraLivroComponent implements OnInit {

  btnText = 'Cadastrar';
  autores: Autor[] = [];
  livro!: Livro;

  constructor(private autorService: AutorService, private livroService: LivroService, private messagesService: MessagesService, private router: Router) { }

  ngOnInit(): void {
    this.autorService.listaAutores().subscribe({
      next: (resultado) => {
        this.autores = resultado as Autor[];
      },
      error: (erro) => {
        alert("Desculpe! Houve um erro ao buscar os autores, tente novamente mais tarde!");
        console.log(erro);
      }
    })
  }

  async createHandler(livro: Livro){
    await this.livroService.cadastraLivro(livro).subscribe({
      next: (autoresIds) =>{
        this.livro = autoresIds;
      },
    });
    this.messagesService.add("Livro cadastrado com sucesso!");
    // this.router.navigate(['/']);
  }

}
