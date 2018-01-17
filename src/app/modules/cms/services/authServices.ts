import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserInfoModel } from '../../../datamodels/userInfoModel';
@Injectable()
export class AuthService {
    public userKey: string = "clintonEditorUser";
    constructor(private http: HttpClient) { }

    validateUser(callback){
        let userInfo: UserInfoModel = new UserInfoModel('Kris','Redding', 'Site Admin', 'test3@gmail.com', true, { "announcements":true, "calender":true, "gallery":true, "forms":true, "ministries":true });
        var currentUser = JSON.parse(localStorage.getItem(this.userKey));

        if(currentUser == null || currentUser.email == null){
            callback(currentUser);
        }
        else { 
            callback(null);
        }
    }

    loginUser(email, password, callback) {
        // Test
        let userInfo: UserInfoModel = new UserInfoModel('Kris','Redding', 'Site Admin', 'test3@gmail.com', true, { "announcements":true, "calender":true, "gallery":true, "forms":true, "ministries":true });

        if(email.length > 0 && password.length > 0) {
            localStorage.setItem(this.userKey, JSON.stringify({ email: userInfo.email, token: "tempToken" }));
            callback({"status":true, "errorMessage":null});
        }
        else {
            callback({"status":false, "errorMessage":"Error with Login [TEST]"});
        }
    }

    logoutUser(){ 
        localStorage.removeItem(this.userKey);
        return (localStorage.getItem(this.userKey) == null);
    }
}