import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notifications } from 'src/app/classes/client';
import { MoviesService } from 'src/app/services/movies.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styles: [
  ]
})
export class NotificationsComponent implements OnInit {
  notifications$: Promise<Notifications[]>;

  constructor(private utilisateurService:UtilisateurService,public moviesService:MoviesService,private router:Router) { }

  async ngOnInit() {
    this.notifications$ = this.utilisateurService.notifications();
  }
  goToMovie(id){
    this.router.navigate(["movies",+id]);
  }

}
