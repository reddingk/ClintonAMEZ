import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

/* Data Models */
import { CmsMessageModel } from '../../../../datamodels/cmsMessages';

/* Service */
import { AuthService } from '../../services/authServices';
import { CoreService } from '../../services/coreServices';

@Component({
  selector: 'cms-home',
  templateUrl: './home.html',
  styleUrls: ['./home.less']
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private coreService: CoreService) { }
  public siteadmin = "test@testmail.com";

  public messageColors = ["red","orange","purple","blue", "green"];
  public newMessage = new FormGroup({
    'subject': new FormControl(''),
    'color': new FormControl(''),    
    'message': new FormControl('')
  });

  public allMessages: CoreService[] = [];

  ngOnInit() { 
    this.getAllNotes();
  } 
  
  /* Add New Note */
  public addNote(){
    var self = this;
    var validation = (this.newMessage.get('subject').valid && this.newMessage.get('message').valid);

    if(validation){
      var newNote = new CmsMessageModel(this.newMessage.get('subject').value, this.newMessage.get('color').value, this.newMessage.get('message').value);

      this.coreService.addNote(newNote ,function(res){
        if(res.errorMessage == null && res.status){
          self.getAllNotes();
        }
        else {
          // Error Message
        }
      });
    }
  }

  /* Get All User Application Notes */
  public getAllNotes(){
    var self = this;
    this.coreService.getAllNotes(function(res){
      if(res.errorMessage == null){
        self.allMessages = res.data;
      }
      else {
        // Error Message
      }
    });
  }

}
