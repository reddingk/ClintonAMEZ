export class CmsNavModel {
    public title: string;
    public icon: string;
    public page: string;
    public subPages: CmsNavModel[];    

    constructor(myTitle, myIcon, myPage, mySubpages){
        this.title = myTitle;
        this.icon = myIcon;
        this.page = myPage;
        this.subPages = mySubpages;
    }
}