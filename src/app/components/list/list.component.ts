import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  tarefa:string = '';
  filtro = "Fazer"
  items: string[] = []

  Todos(){
    this.filtro = 'Todos'
  }

  Feitos(){
    this.filtro = 'Feitos'
  }

  Fazer(){
    this.filtro = 'Fazer'
  }

  addTarefa(){
    this.items.push(this.tarefa)
  }

}
