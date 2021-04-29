import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

  SignUpForm = this.formBuilder.group({
    inputNom: '',
    inputPrenom: '',
    inputEmail: '',
    inputPassword: '',
    inputConfirmPassword: '',
  });
  constructor(private formBuilder:FormBuilder,private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem("token") && localStorage.getItem("refreshToken")) {
      this.router.navigate(["movies"]);
    }
  }


  signup(){
    if(this.SignUpForm.value["inputPassword"] == this.SignUpForm.value["inputPassword"]){
      this.auth.register(this.SignUpForm.value["inputNom"], this.SignUpForm.value["inputPrenom"],this.SignUpForm.value["inputEmail"], this.SignUpForm.value["inputPassword"] );
      this.SignUpForm.reset();
    }

  }
}