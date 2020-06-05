import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, tap } from "rxjs/operators";

export interface LoginForm {
  email: string;
  password: string;
};

export interface User {
  name?: string;
  username?: string;
  emai?: string;
  password?: string;
  // passwordConfirm?: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm) {  

    return this.http.post<any>('/api/users/login', {email: loginForm.email, password: loginForm.password}).pipe(
      map((token) => {
        console.log('token');
        localStorage.setItem('blog-token', token.access_token);
        return token;
      })
    )
  }

  register(user: User) {
    return this.http.post<any>('/api/users', user).pipe(
      tap(user => console.log(user)),
      map(user => user)
    )
  }
}
