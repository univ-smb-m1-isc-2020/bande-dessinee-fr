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
    this.moviesService.getPage(0).then(o=>o.movies.forEach(o=>{
      var t = new Movies();
      t.deck = o.deck;
      t.description = o.description;
      t.id = o.id;
      t.image = o.image;
      t.name = o.name;
      t.release_date = o.release_date;

      this.movies$.push(t);
    }));
  }

}
