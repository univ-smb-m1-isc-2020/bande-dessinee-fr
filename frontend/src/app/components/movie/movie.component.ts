import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/classes/client';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [
  ]
})
export class MovieComponent implements OnInit {

  movie$:Promise<Movies>;
  id:number;
  constructor(private moviesService:MoviesService, private routeActive:ActivatedRoute) { }

  async ngOnInit() {
    this.id = +this.routeActive.snapshot.paramMap.get('id');
    this.movie$ = this.moviesService.getMovie(this.id);
  }

}
