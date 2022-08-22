import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/messages/messages.service';
import { AutorService } from 'src/app/services/autor.service';
import { environment } from 'src/environments/environment';
import { Autor } from '../../autor';


@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.css']
})
export class ListarAutoresComponent implements OnInit {

  autores: Autor[] = [];
  baseApiUrl = environment.baseApiURL;

  constructor(private autorService: AutorService) { }

  ngOnInit(): void {
    this.autorService.listaAutores().subscribe({
      next: (resultado) => {
        this.autores = resultado as Autor[];
      },
      error: (erro) => {
        alert("Desculpe! Houve um erro ao buscar os autores, tente novamente mais tarde!");
        console.log(erro);
      }
    });
  }


}
