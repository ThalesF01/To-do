import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  tarefa: string = '';
  filtro: 'Todos' | 'Feitos' | 'Fazer' = 'Fazer';
  itemsToDo: string[] = ['1', '2', '3', '4', '5'];
  itemsFeitos: string[] = [];

  setFiltro(filtro: 'Todos' | 'Feitos' | 'Fazer') {
    this.filtro = filtro;
  }

  addTarefa() {
    if (this.tarefa) {
      this.itemsToDo.push(this.tarefa);
      this.tarefa = '';
    }
  }

  removeTarefa(index: number, item: string) {
    this.itemsToDo.splice(index, 1);
    this.itemsFeitos.push(item);
  }

  removeFeitos() {
    this.itemsFeitos = [];
  }

}
