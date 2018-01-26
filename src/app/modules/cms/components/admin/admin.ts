import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

/* Data Models */
import { UserInfoModel } from '../../../../datamodels/userInfoModel';

/* Service */
import { AuthService } from '../../services/authServices';
import { CoreService } from '../../services/coreServices';

@Component({
  selector: 'cms-admin',
  templateUrl: './admin.html',
  styleUrls: ['./admin.less', '../../cms.styles.less']
})
export class AdminComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private toastr: ToastrService, public dialog: MatDialog, private authService: AuthService) { }
    
  public userInfo: UserInfoModel = null;
  public allUsers: UserInfoModel[] = [];
  public userDataStore;
  public displayedColumns = ['userid','name','email','admin', 'update'];
  
  /* User Filter */
  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.userDataStore.filter = filterValue;
  }

  /* Get Users */
  public getAllUsers(){
    var self = this;
    this.authService.getAllUsers(function(res){
      if(res.errorMessage == null) {
        self.allUsers = res.users;
        self.userDataStore = new MatTableDataSource(res.users);        
      }
    });
  }

  /* User Validation */
  public validateUser(){
    var self = this;
    this.authService.validateUser(function(res){
      self.userInfo = res; 
      self.getAllUsers();        
    });
  }

  /* Open User Editor */
  public openDialog(myUser: UserInfoModel, newUser: Boolean): void {
    let dialogRef = this.dialog.open(EditUserDialog, {      
      data: { user: myUser, new: newUser }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }

  ngOnInit() { this.validateUser(); } 
  ngAfterViewInit(){ this.userDataStore.paginator = this.paginator;}
}

@Component({
  selector: 'edit-user-dialog',
  templateUrl: 'edit-user-dialog.html',
  styleUrls: ['./admin.less', '../../cms.styles.less']
})
export class EditUserDialog {

  private allFeatures = this.coreService.getFeatureList();
  public featureList = Object.keys(this.allFeatures);

  public updateUser = (this.data.user == null ? new UserInfoModel(null,null, null, null, false, {}) : this.data.user);

  public updateForm = new FormGroup({
    'firstname': new FormControl(this.updateUser.firstname, [Validators.required]),
    'lastname': new FormControl(this.updateUser.lastname, [Validators.required]),
    'title': new FormControl(this.updateUser.title),
    'email': new FormControl(this.updateUser.email, [Validators.required, Validators.email]),
    'password': new FormControl('')
  });    
  public pwdForm = new FormGroup({
    'pwd1': new FormControl('', [Validators.required]),
    'pwd2': new FormControl('', [Validators.required])
  });  

  constructor(private coreService: CoreService, private toastr: ToastrService, public dialogRef: MatDialogRef<EditUserDialog>,@Inject(MAT_DIALOG_DATA) public data: any) { }
    
  getErrorMessage(type) {
    var message = '';

    if(type == 'email'){
        message = (this.updateForm.get('email').hasError('required') ? 'You must enter a value' : (this.updateForm.get('email').hasError('email') ? 'Not a valid email' : ''));
    }
    return message;
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

  onNoClick(): void {
    this.dialogRef.close();
  }
}