import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    const urlEndPoint = "https://jsonplaceholder.typicode.com/users";
    return this.http.get<any>(urlEndPoint);
  }
}
