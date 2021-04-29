import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client, CreateUtilisateur_Publisher } from '../classes/client';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  deleteNotif(id) {
    this.client.notifications(+id,"Bearer " + localStorage.getItem("token"));
  }

  client = new Client(environment.server);
  constructor() { }

  like(utilisateur_id, publisher_id){
    var t = new CreateUtilisateur_Publisher();
    t.publisher_id = publisher_id;
    t.utilisateur_id = utilisateur_id;
    this.client.like("Bearer " + localStorage.getItem("token"),t);
  }
  async notifications(){
    return await this.client.notificationsAll("Bearer " + localStorage.getItem("token"));
  }
}
