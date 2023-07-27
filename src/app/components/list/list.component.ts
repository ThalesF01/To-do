import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  tarefa:string = '';
  filtro = "Fazer"
  itemsToDo: string[] = ['1','2','3','4','5']
  itemsFeitos: string[] = []

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
    if (this.tarefa != ''){
      this.itemsToDo.push(this.tarefa)
      this.tarefa = ''
    }
  }

  removeTarefa(index:number,item:string){
    this.itemsToDo.splice(index, 1)
    this.itemsFeitos.push(item)
  }

  removeFeitos(){
    this.itemsFeitos = []
  }

}
