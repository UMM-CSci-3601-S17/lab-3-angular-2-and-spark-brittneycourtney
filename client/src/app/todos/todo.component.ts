/**
 * Created by cookx876 on 2/10/17.
 */
import { Component, OnInit} from '@angular/core';
import { TodoService } from "./todo.service";
import { Todo} from "./todo";
import { FormsModule } from '@angular/forms';
import { FilterBy } from "./filter.pipe";
import {sortBy} from "./sort.pipe";

@Component({
    selector: 'todo-component',
    providers: [ FilterBy],
    templateUrl: 'todo.component.html',
})

export class TodoComponent implements OnInit{
    public todos: Todo[];
    constructor(private todoService: TodoService) {
      //  this.todo = todoService.getTodos();
    }
    ngOnInit(): void {
        this.todoService.getTodos().subscribe(
            todos => this.todos = todos,
            err => {
                console.log(err);
            }
        );
    }

}
