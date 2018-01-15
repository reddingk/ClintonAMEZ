export class CmsNavModel {
    public title: string;
    public icon: string;
    public page: string;    

    constructor(myTitle, myIcon, myPage){
        this.title = myTitle;
        this.icon = myIcon;
        this.page = myPage;
    }
}