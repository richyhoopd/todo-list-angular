import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  tareas : Todo[] = [];
  nuevaTarea : string;

  guardarTarea() {
    if(this.nuevaTarea){
      let tarea = new Todo();
      tarea.name = this.nuevaTarea;
      tarea.completed = true
      this.tareas.push(tarea)
      this.nuevaTarea = '';
    } else {
      alert('por favor ingresa una tarea')
    }
  }

  done(id:number) {
    this.tareas[id].completed = !this.tareas[id].completed;
  }

  eliminar(id:number) {
    this.tareas = this.tareas.filter((v,i)=> i !== id);
  }
}

