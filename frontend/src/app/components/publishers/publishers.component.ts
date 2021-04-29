import { Component, OnInit } from '@angular/core';
import { PaginationPublisher, Publishers } from 'src/app/classes/client';
import { PublishersService } from 'src/app/services/publishers.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styles: [
  ]
})
export class PublishersComponent implements OnInit {

  publishers$ : Promise<PaginationPublisher>;

  constructor(private publishersService: PublishersService) { }

  ngOnInit(): void {
    this.publishers$ = this.publishersService.getPage(0);
  }

}
