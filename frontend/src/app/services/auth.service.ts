import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateUtilisateur, Client} from '../classes/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  client = new Client("https://info806.visarsylejmani.com",{fetch()});
  constructor() { }

  async login(email, password) {
    let data = new AuthenticateUtilisateur();
    data.email = email;
    data.motDePasse = password;
    this.client.login(data);
  }

  async refresh(refreshToken) {
  }
}
