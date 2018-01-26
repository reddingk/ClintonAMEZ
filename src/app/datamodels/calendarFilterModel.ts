export class CalFilterModel {
    public title: string;
    public primaryColor: string;
    public secondaryColor: string;
    public active: Boolean;    

    constructor(myTitle, myPrimary, mySecondary){
        this.title = myTitle;
        this.primaryColor = myPrimary;
        this.secondaryColor = mySecondary;
        this.active = true;
    }
}