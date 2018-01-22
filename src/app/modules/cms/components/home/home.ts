import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

/* Data Models */

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
  
  ngOnInit() { } 
}
