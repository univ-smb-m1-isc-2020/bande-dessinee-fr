import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateUtilisateur, Client, CreateUtilisateur} from '../classes/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  client = new Client("http://localhost:8080/api");
  constructor(private router:Router) { }

  async login(email, password) {
    let data = new AuthenticateUtilisateur();
    data.email = email;
    data.motDePasse = password;
    var r = await this.client.login(data);
    if(r.token!="undefined"){
      localStorage.setItem("token",r.token);
      localStorage.setItem("refreshToken",r.refreshToken);
      this.router.navigate(["/","movies"]);
    }
  }

  async register(nom,prenom,email, password) {
    let data = new CreateUtilisateur();
    data.nom = nom;
    data.prenom = prenom;
    data.email = email;
    data.motDePasse = password;
    var r = await this.client.login(data);
    if(r.token!="undefined"){
      localStorage.setItem("token",r.token);
      localStorage.setItem("refreshToken",r.refreshToken);
      this.router.navigate(["/","movies"]);
    }
  }

}
