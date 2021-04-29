import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/classes/client';
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
    this.movies$ = await this.moviesService.getPage(0);
    console.log(this.movies$.forEach(o=>o.name));
  }

}
