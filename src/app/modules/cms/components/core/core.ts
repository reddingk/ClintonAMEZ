import { Component, OnInit } from '@angular/core';

/* Data Models */
import { CmsNavModel } from '../../../../datamodels/cmsNavModel';
import { UserInfoModel } from '../../../../datamodels/userInfoModel';

@Component({
  selector: 'cms-core',
  templateUrl: './core.html',
  styleUrls: ['./core.less']
})
export class CMSCoreComponent implements OnInit {
  public cmsNavItems = {
    "announcements": new CmsNavModel('announcements', 'fa-bullhorn', 'announcements'),
    "calender": new CmsNavModel('calender', 'fa-calendar-alt', 'calender'),
    "gallery": new CmsNavModel('gallery', 'fa-images', 'gallery'),
    "forms": new CmsNavModel('forms', 'fa-clipboard', 'forms')
  };

  public userInfo: UserInfoModel = new UserInfoModel('Kris','Redding', 'Site Admin', true, { "announcements":true, "calender":true, "gallery":true, "forms":true });

  public navData = {
    "displayList": []
  };

  constructor() { }
  ngOnInit() {  
    this.buildNavData();
  } 
  
  /* Build User Permission Based Navigation List */
  public buildNavData() {
    if(this.userInfo != null){
      var tmpList = Object.keys(this.userInfo.permissions);
      for(var i = 0; i < tmpList.length; i++){
        if(this.userInfo.permissions[tmpList[i]] == true){
          this.navData.displayList.push(this.cmsNavItems[tmpList[i]]);
        }
      }
    }
  }

  /* Check if logged in user is an Admin */
  public isAdmin(){
    return (this.userInfo != null && this.userInfo.adminStatus);
  }
  /*End*/
}
