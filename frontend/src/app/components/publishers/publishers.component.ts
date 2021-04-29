import { Component, OnInit } from '@angular/core';
import { PaginationPublisher, Publishers } from 'src/app/classes/client';
import { PublishersService } from 'src/app/services/publishers.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styles: [
  ]
})
export class PublishersComponent implements OnInit {

  publishers$ : Promise<PaginationPublisher>;

  constructor(private publishersService: PublishersService,private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
    this.publishers$ = this.publishersService.getPage(0);
  }

  like(id){
    this.utilisateurService.like(1,id);
  }

}
