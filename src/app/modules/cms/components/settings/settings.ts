import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

/* Data Models */
import { UserInfoModel } from '../../../../datamodels/userInfoModel';

/* Service */
import { AuthService } from '../../../../services/authServices';
import { CoreService } from '../../../../services/coreServices';

@Component({
  selector: 'cms-settings',
  templateUrl: './settings.html',
  styleUrls: ['./settings.less', '../../cms.styles.less']
})
export class SettingsComponent implements OnInit {
  constructor(private toastr: ToastrService, private authService: AuthService, private coreService: CoreService) { }
    
  public userInfo: UserInfoModel = null;
  public settingsForm = null;
  public pwdForm = new FormGroup({
    'pwd1': new FormControl('', [Validators.required]),
    'pwd2': new FormControl('', [Validators.required])
  });  

  /* Reload Page */
  reloadPage() {
      // refresh editor page        
      window.location.reload();
  }
  /* Form Error Messages */
  getErrorMessage(type) {
    var message = '';

    if(type == 'email'){
        message = (this.settingsForm.get('email').hasError('required') ? 'You must enter a value' : (this.settingsForm.get('email').hasError('email') ? 'Not a valid email' : ''));
    }
    return message;
  }

  /* User Validation */
  public validateUser(){
    var self = this;
    this.authService.validateUser(function(res){
      self.userInfo = res;
      self.settingsForm = new FormGroup({
        'firstname': new FormControl(self.userInfo.firstname),
        'lastname': new FormControl(self.userInfo.lastname),
        'title': new FormControl(self.userInfo.title),
        'email': new FormControl(self.userInfo.email, [Validators.required, Validators.email]),
        'password': new FormControl('')
      });      
    });
  }

  /* Get Access Pills */
  public accessPills(){
      var pills = [];
      var accessList = Object.keys(this.userInfo.permissions);
      for(var i =0; i < accessList.length; i++){
        if(this.userInfo.permissions[accessList[i]] == true){
            pills.push(accessList[i]);
        }
      }

      return pills;
  }  

  /* Update Password */
  public updatePassword(){
    if(this.pwdForm.get('pwd1').value != this.pwdForm.get('pwd2').value){
      // Error Message
      this.toastr.error('Your passwords do not match.', 'Unable to update password!');
    }
    else {
      // Submit Update
      this.toastr.success('Updated password successfully!', 'Success!');
    }
  }

  ngOnInit() { this.validateUser(); } 
}