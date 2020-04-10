import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Tarefas  do Ivanzão:';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });

    this.todos.push(new Todo(1, 'Dar banho no Carlos Daniel', false));
    this.todos.push(new Todo(2, 'Secar o Carlos Daniel', false));
    this.todos.push(new Todo(3, 'Escovar os pelos do Carlos Daniel', true));
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if (index !== -1){
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

  markUnDone(todo: Todo){
    todo.done = false;
  }

}
