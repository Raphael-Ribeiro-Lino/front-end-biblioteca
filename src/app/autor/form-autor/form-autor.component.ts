import { Autor } from './../autor';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-autor',
  templateUrl: './form-autor.component.html',
  styleUrls: ['./form-autor.component.css']
})
export class FormAutorComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Autor>();
  @Input() btnText!: string;
  @Input() dadosAutor: Autor | null = null;

  autorForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.autorForm = new FormGroup({
      nome: new FormControl(this.dadosAutor ? this.dadosAutor.nome: '', [Validators.required]),
      biografia: new FormControl(this.dadosAutor ? this.dadosAutor.biografia: '', [Validators.required])
    })

  }

  get nome(){
    return this.autorForm.get('nome')!;
  }

  get biografia(){
    return this.autorForm.get('biografia')!;
  }

  submit(){
    if(this.autorForm.invalid){
      return;
    }
    this.onSubmit.emit(this.autorForm.value);
  }

}
