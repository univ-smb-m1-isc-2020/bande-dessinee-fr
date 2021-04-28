import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateUtilisateur, Client} from '../classes/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  client = new Client("http://localhost:8080/api");
  constructor(private router:Router) { }

  async login(email, password,resterConnecte) {
    let data = new AuthenticateUtilisateur();
    data.email = email;
    data.motDePasse = password;
    var r = await this.client.login(data);
    if(r.token!="undefined"){
      if (resterConnecte){
        localStorage.setItem("token",r.token);
        localStorage.setItem("refreshToken",r.refreshToken);
      }
      else{
        sessionStorage.setItem("token",r.token);
        sessionStorage.setItem("refreshToken",r.refreshToken);
      }
      this.router.navigate(["/","movies"]);
    }
  }

  async refresh(refreshToken) {
  }
}
