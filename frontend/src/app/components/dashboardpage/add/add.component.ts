import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
    div#content{
      min-height: 100vh;
      overflow: auto;
      background-image:url("https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
      background-size:cover;
    }
    `
  ]
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
