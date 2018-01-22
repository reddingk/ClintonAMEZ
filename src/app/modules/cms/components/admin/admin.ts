import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

/* Data Models */
import { UserInfoModel } from '../../../../datamodels/userInfoModel';

/* Service */
import { AuthService } from '../../services/authServices';

@Component({
  selector: 'cms-admin',
  templateUrl: './admin.html',
  styleUrls: ['./admin.less', '../../cms.styles.less']
})
export class AdminComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private authService: AuthService) { }
    
  public userInfo: UserInfoModel = null;
  public allUsers: UserInfoModel[] = [];
  public userDataStore;
  public displayedColumns = ['userid','name','email','admin'];
  
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
        //self.userDataStore.paginator = self.paginator;
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

  ngOnInit() { this.validateUser(); } 
  ngAfterViewInit(){ this.userDataStore.paginator = this.paginator;}
}
