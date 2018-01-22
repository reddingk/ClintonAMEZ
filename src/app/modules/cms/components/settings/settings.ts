import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

/* Data Models */
import { UserInfoModel } from '../../../../datamodels/userInfoModel';

/* Service */
import { AuthService } from '../../services/authServices';
import { CoreService } from '../../services/coreServices';

@Component({
  selector: 'cms-settings',
  templateUrl: './settings.html',
  styleUrls: ['./settings.less', '../../cms.styles.less']
})
export class SettingsComponent implements OnInit {
  constructor(private authService: AuthService, private coreService: CoreService) { }
    
  public userInfo: UserInfoModel = null;
  public settingsForm = null;
  
  public updatePassword = {pwd1: null, pwd2: null};

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

  ngOnInit() { this.validateUser(); } 
}
