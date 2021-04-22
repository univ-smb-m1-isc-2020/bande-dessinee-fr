import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
    `
    div#gauche-col{
      min-height: 100vh;
      overflow: auto;
      background-image:url("https://images.pexels.com/photos/2854693/pexels-photo-2854693.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
      background-size: cover;
    }
    
    div#droit-col{
      min-height: 100vh;
      overflow: auto;
      background-image:url("https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
      background-size:cover;
      background-position: right 0% bottom 0%;
    }
    `
  ]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
