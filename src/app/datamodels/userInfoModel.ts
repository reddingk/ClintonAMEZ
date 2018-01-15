export class UserInfoModel {
    public firstname: string;
    public lastname: string;
    public title: string; 
    public adminStatus: boolean;  
    public permissions: any; // Dictionary ex. {'pagename':true, 'pagename2':false}

    constructor(myFirstname, myLastname, myTitle, myAdmin, myPermissions){  
        this.firstname = myFirstname;
        this.lastname = myLastname;
        this.title = myTitle;
        this.adminStatus = myAdmin;
        this.permissions = myPermissions;
    }
}