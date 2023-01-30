import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {  Observable } from 'rxjs';
const endpoint = 'http://jsonplaceholder.typicode.com/posts'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllPosts():Observable<any>{
  return this.http.get(endpoint);
  }
}
