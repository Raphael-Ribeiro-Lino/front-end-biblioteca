
import { Autor } from './../../autor';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/messages/messages.service';
import { Router } from '@angular/router';
import { AutorService } from 'src/app/services/autor.service';


@Component({
  selector: 'app-cadastro-autor',
  templateUrl: './cadastro-autor.component.html',
  styleUrls: ['./cadastro-autor.component.css']
})
export class CadastroAutorComponent implements OnInit {

  btnText = 'Cadastrar';

  constructor(
    private autorService: AutorService,
    private messagesService: MessagesService,
    private router: Router
    ){}

  ngOnInit(): void {

  }

  async createHandler(autor: Autor){
    await this.autorService.cadastraAutor(autor).subscribe();
    this.messagesService.add("Autor cadastrado com sucesso!");
    this.router.navigate(['/']);
  }

}
