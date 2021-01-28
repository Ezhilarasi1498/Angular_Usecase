import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { User } from 'src/app/Model/users';
import { BehaviorSubject,Observable,throwError  } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  apiUrl: 'http://localhost:3000/users';
  private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
  

  constructor(
    private http: HttpClient,
    public router: Router
    ) { 
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public get userValue(): User {
    return this.userSubject.value;
}

login(username, password) {
  return this.http.post<User>(`${this.apiUrl}/authenticate`, { username, password })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in 
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
      }));
}

register(user: User) {
  return this.http.post<User>(`${this.apiUrl}/register`, user);
}

getAll() {
  return this.http.get<User[]>(`${this.apiUrl}/users`);
}

getById(id: string) {
  return this.http.get<User>(`${this.apiUrl}/${id}`);
}

  
}
