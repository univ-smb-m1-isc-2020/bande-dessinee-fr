import { Component, OnInit } from '@angular/core';
import { Movies, PaginationMovie } from 'src/app/classes/client';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {


  movies$: Movies[];
  constructor(private moviesService : MoviesService) { }

  async ngOnInit(): Promise<void> {
    (await this.moviesService.getPage(0)).movies.forEach(o=> console.log(o.name));
  }

}
