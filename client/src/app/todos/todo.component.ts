/**
 * Created by cookx876 on 2/10/17.
 */
import { Component } from '@angular/core';
import { TodoService } from "./todo.service";
import { FormsModule } from '@angular/forms';
import { FilterBy } from "./filter.pipe";

@Component({
    selector: 'todo-component',
    providers: [TodoService],
    templateUrl: 'todo.component.html',
})

export class TodoComponent {
    private todos: any;

    constructor(private _todoService: TodoService) {
        this.todos = _todoService.getTodos();
    }
}