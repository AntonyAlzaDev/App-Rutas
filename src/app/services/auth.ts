
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  private simulatedUser = [    
    {
      email: 'admin@test.com',
      password: 'password',
      user: {
        id: 1,
        email: 'admin@test.com',
        name: 'Administrador',
        role: 'admin'
      }
    },
    {
      email: 'user@test.com',
      password: 'password123',
      user: {
        id: 2,
        email: 'user@test.com',
        name: 'Usuario Regular',
        role: 'user'
      }
    },
    {
      email: 'juan@gmail.com',
      password: '123456',
      user: {
        id: 3,
        email: 'juan@gmail.com',
        name: 'Juan Pérez',
        role: 'user'
      }
    }
  ]

  constructor(private http: HttpClient){

  }

  private checkStoredAuth(){
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');

    if(token && userString){
      try{
        const user = JSON.parse(userString);

        this.isAuthenticatedSubject.next(true);

      }catch(error){
    }
  }
  }

  // localStorage.setItem('token', response.token);

  
}
