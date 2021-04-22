import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styles: [
    `
    div#droit-col{
      min-height: 100vh;
      overflow: auto;
      background-image:url("https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
      background-size:cover;
    }
    `
  ]
})
export class SignuppageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
