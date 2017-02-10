/**
 * Created by cookx876 on 2/10/17.
 */
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from './todo';
import {Observable} from "rxjs";

@Injectable()
export class TodoService {
    private baseUrl: string = API_URL;
    constructor(private http:Http) { }

    getTodos(): Observable<Todo[]> {
        let body = this.http.request(this.baseUrl + 'todos').map(res => res.json());
        return body;
    }
}