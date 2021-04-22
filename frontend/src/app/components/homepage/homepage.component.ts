import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
    `
    div#gauche-col{
      min-height: 100vh;
      overflow: auto;
      background-image:url("https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
      background-size: cover;
    }

    div#droit-col{
      min-height: 100vh;
      overflow: auto;
      background-image:url("https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
      background-size: cover;
    }
    `
  ]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
