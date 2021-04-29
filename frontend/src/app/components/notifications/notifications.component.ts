import { Component, OnInit } from '@angular/core';
import { Notifications } from 'src/app/classes/client';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styles: [
  ]
})
export class NotificationsComponent implements OnInit {
  notifications$: Promise<Notifications[]>;

  constructor(private utilisateurService:UtilisateurService) { }

  async ngOnInit() {
    this.notifications$ = this.utilisateurService.notifications();
  }

}
