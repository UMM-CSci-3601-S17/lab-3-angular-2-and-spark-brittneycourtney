/**
 * Created by cookx876 on 2/10/17.
 */
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from './todo';
import {Observable} from "rxjs";

@Injectable()
export class TodoService {
    private TodoUrl: string = API_URL + "todos";
    constructor(private http:Http) { }

    getTodos(): Observable<Todo[]> {
        return this.http.request(this.TodoUrl).map(res => res.json());
    }

    getTodoById(id: string):Observable<Todo> {
        return this.http.request(this.TodoUrl + "/" + id).map(res => res.json());
    }
}