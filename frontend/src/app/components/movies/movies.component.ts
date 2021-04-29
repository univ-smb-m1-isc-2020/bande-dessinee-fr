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


  movies$: Promise<Movies[]>;
  constructor(private moviesService : MoviesService) { }

  async ngOnInit(){
    this.movies$ = this.moviesService.getPage(0);
    console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY");
    console.log((await this.movies$).toString);
  }

}
