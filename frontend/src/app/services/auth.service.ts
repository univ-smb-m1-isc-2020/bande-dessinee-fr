import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticateUtilisateur, Client, CreateUtilisateur} from '../classes/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  client = new Client(environment.server);
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

  async signout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    this.router.navigate(["/","signin"]);
  }

  isloggedin(){
    return localStorage.getItem("token").length > 20;
  }
}
