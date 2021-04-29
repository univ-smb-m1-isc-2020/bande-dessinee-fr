import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styles: [`
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
    }`]
})
export class SigninpageComponent implements OnInit {

  SignInForm = this.formBuilder.group({
    inputEmail: '',
    inputPassword: '',
    switchResterConnecte: false
  });

  constructor(private router: Router, private auth: AuthService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (localStorage.getItem("token") && localStorage.getItem("refreshToken")) {
      this.router.navigate(["movies","/","0"]);
    }
  }

  login() {
    console.log("Email = " + this.SignInForm.value["inputEmail"]);
    console.log("Password = " + this.SignInForm.value["inputPassword"]);
    console.log("Rester connecté = " + this.SignInForm.value["switchResterConnecte"]);
    this.auth.login(this.SignInForm.value["inputEmail"], this.SignInForm.value["inputPassword"]);
    this.SignInForm.reset();
  }
}
