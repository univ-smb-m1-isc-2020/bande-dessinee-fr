import { Component, OnInit } from '@angular/core';
import { PaginationMovie } from 'src/app/classes/client';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {

  page: PaginationMovie;
  constructor(private moviesService : MoviesService) { }

  async ngOnInit(): Promise<void> {
    this.page = await this.moviesService.getPage(0);
    this.page.pages.nb_Pages
  }

}
