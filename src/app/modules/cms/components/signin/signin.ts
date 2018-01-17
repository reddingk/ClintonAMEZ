import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';

/* Service */
import { AuthService } from '../../services/authServices';

@Component({
  selector: 'cms-signin',
  templateUrl: './signin.html',
  styleUrls: ['./signin.less']
})
export class SignInComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  public myPassword: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() { }  
  
  getErrorMessage() {
    return (this.email.hasError('required') ? 'You must enter a value' : (this.email.hasError('email') ? 'Not a valid email' : ''));
  }

  loginUser(){
    alert(this.email.value + " | " + this.myPassword);
    /*this.authService.loginUser(this.email, this.password, function(res){

    });*/
  }
}
