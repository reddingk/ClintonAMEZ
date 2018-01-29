import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/* Service */
import { AuthService } from '../../../../services/authServices';

@Component({
  selector: 'cms-signin',
  templateUrl: './signin.html',
  styleUrls: ['./signin.less']
})
export class SignInComponent implements OnInit {
  public errorMsg = null;

  public credetialForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('')
  });
    
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }  
  
  getErrorMessage() {
    return (this.credetialForm.get('email').hasError('required') ? 'You must enter a value' : (this.credetialForm.get('email').hasError('email') ? 'Not a valid email' : ''));
  }

  loginUser(){ 
    var self = this;   
    var email = this.credetialForm.get('email').value;
    var pwd = this.credetialForm.get('password').value;
    // clear error message
    self.errorMsg = null;
    this.authService.loginUser(email, pwd, function(res){
      if(!res.status || res.errorMessage != null){
        self.errorMsg = res.errorMessage;
      }
      else {
        // refresh editor page        
        window.location.reload();
      }
    });
  }
}
