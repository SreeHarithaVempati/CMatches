import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { User } from '../../user';

@Component({
  selector: 'authentication-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    console.log("Login user", this.user);
    this.authService.loginUser(this.user).subscribe(data => {
      console.log("Login successful");
      if(data['token']) {
        this.authService.setToken(data['token']);
        this.router.navigate(['/matches']);
      }
      
    });
  }

}
