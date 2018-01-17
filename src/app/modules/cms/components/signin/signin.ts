import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'cms-signin',
  templateUrl: './signin.html',
  styleUrls: ['./signin.less']
})
export class SignInComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit() { }  
  
  getErrorMessage() {
    return (this.email.hasError('required') ? 'You must enter a value' : (this.email.hasError('email') ? 'Not a valid email' : ''));
  }
}
