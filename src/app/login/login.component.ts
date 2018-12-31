import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    ///alert("hello")
    if(this.username === "admin" && this.password === "password")
    this.router.navigate(['/dashboard']);
    else
    alert("Invalid ID / Password")
  }
}
