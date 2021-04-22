import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styles: [
    `
    div#gauche-col{
      min-height: 100vh;
      overflow: auto;
      width:100%;
      background-image:url("https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
      background-size: cover;
    }
    `
  ]
})
export class AdminpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
