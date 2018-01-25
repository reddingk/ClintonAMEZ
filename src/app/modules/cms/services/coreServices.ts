import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserInfoModel } from '../../../datamodels/userInfoModel';

@Injectable()
export class CoreService {
    public userKey: string = "clintonEditorUser";
    constructor(private http: HttpClient) { }
    public features = {        
        "announcements": { "navItem":'fa-bullhorn'},
        "forms": { "navItem":'fa-clipboard'},
        "calender": { "navItem":'fa-calendar-alt'},
        "gallery": { "navItem":'fa-images'},
        "ministries": { "navItem":'fa-child'}
      };

    getFeatureList(){
        return this.features;
    }
}