import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Livro } from './../livro';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Autor } from 'src/app/autor/autor';

@Component({
  selector: 'app-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.css']
})
export class FormLivroComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Livro>();
  @Input() btnText!: string;
  @Input() autores!: Autor[];

  livroForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.livroForm = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      anoLancamento: new FormControl('', [Validators.required]),
      autoresIds: new FormControl('', [Validators.required])
    })
  }

  get titulo(){
    return this.livroForm.get('titulo')!;
  }

  get anoLancamento(){
    return this.livroForm.get('anoLancamento')!;
  }

  get autoresIds(){
    return this.livroForm.get('autoresIds');
  }

  submit(){
    if(this.livroForm.invalid){
      return;
    }
    this.onSubmit.emit(this.livroForm.value);
  }

}
