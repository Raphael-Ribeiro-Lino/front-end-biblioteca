import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from './../autor';
import { Component, OnInit } from '@angular/core';

import { MessagesService } from 'src/app/messages/messages.service';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.css']
})
export class EditarAutorComponent implements OnInit {
  autor!: Autor;
  btnText: string = 'Editar';

  constructor(private autorService: AutorService, private route: ActivatedRoute, private messagesService: MessagesService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.autorService.buscaAutor(id).subscribe({
      next: (resultado) => {
        this.autor = resultado as Autor;
      },
      error: (erro) => {
        alert("Desculpe! Houve um erro ao buscar os autores, tente novamente mais tarde!")
        console.log(erro);
      }
    });
  }

  async editaAutor(autor: Autor){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    await this.autorService.editarAutor(id, autor).subscribe();
    this.messagesService.add("Autor editado com sucesso!");
    this.router.navigate(['/']);
  }

}
