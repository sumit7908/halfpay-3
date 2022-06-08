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
  data;
  loggedIn: Boolean;
  user_id;

  constructor(private http: HttpClient, private apiService: ApiService) { }

  authLogin(user_name, password): Observable<any> {
    console.log(user_name +" "+ password)
    const body = {
      email: user_name,
      password: password
    };
    console.log(body)
    this.data = this.http.post<any>( "http://localhost:8020/login", body, 
    {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
    if(this.data != null){
      sessionStorage.setItem('username',user_name);
      this.loggedIn=true;
    }
    else{
      this.loggedIn=false;
    }

    return this.data;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(user)
    console.log(!(user === null))
    console.log(this.user_id)
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }


 

  baseUrl = 'http://localhost:8020/registration';

  registeruser(user: User):Observable<User>{
    console.log(user)
    return this.http.post<User>(`${this.baseUrl}`,user);
  }
}
