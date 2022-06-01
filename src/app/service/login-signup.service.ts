import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {
  public login_url = environment.server_url;
  public reg_url = environment.server_url;

  constructor(private http: HttpClient, private apiService: ApiService) { }

  authLogin(user_name, password): Observable<any> {
    console.log(user_name +" "+ password)
    const body = {
      email: user_name,
      password: password
    };
    console.log(body)

    return this.http.post<any>( "http://localhost:8020/login", body, 
    {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }


 

  baseUrl = 'http://localhost:8020/registration';

  registeruser(user: User):Observable<User>{
    console.log(user)
    return this.http.post<User>(`${this.baseUrl}`,user);
  }
}
