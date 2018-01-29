import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserInfoModel } from '../datamodels/userInfoModel';
@Injectable()
export class AuthService {
    public userKey: string = "clintonEditorUser";
    constructor(private http: HttpClient) { }

    validateUser(callback){
        let userInfo: UserInfoModel = new UserInfoModel('Kris','Redding', 'Site Admin', 'test3@gmail.com', true, { "announcements":true, "calender":true, "gallery":true, "forms":true, "ministries":true });
        var currentUser = JSON.parse(localStorage.getItem(this.userKey));

        if(currentUser == null || currentUser.email == null){
            callback(null);
        }
        else { 
            callback(userInfo);
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

    getAllUsers(callback){
        // Get Local User
        // Send Local User to API

        // TEST
        let user1: UserInfoModel = new UserInfoModel('Kris','Redding', 'Site Admin', 'test3@gmail.com', true, { "announcements":true, "calender":true, "gallery":true, "forms":true, "ministries":true });
        let user2: UserInfoModel = new UserInfoModel('Bill','Tester', 'Site Admin', 'test45@gmail.com', false, { "announcements":false, "calender":true, "gallery":false, "forms":false, "ministries":false });
        let user3: UserInfoModel = new UserInfoModel('John','Wilson', 'Site Admin', 'test12@gmail.com', false, { "announcements":true, "calender":false, "gallery":false, "forms":true, "ministries":false });
        let user4: UserInfoModel = new UserInfoModel('Tim','Carter', 'Site Admin', 'test2@gmail.com', false, { "announcements":false, "calender":false, "gallery":false, "forms":false, "ministries":true });
        let user5: UserInfoModel = new UserInfoModel('Tim','Carter', 'Site Admin', 'test32@gmail.com', true, { "announcements":true, "calender":true, "gallery":true, "forms":true, "ministries":true });

        let userInfo: UserInfoModel[] = [ user1, user2, user3, user4, user5];

        callback({"users":userInfo, "errorMessage":null});
    }
}