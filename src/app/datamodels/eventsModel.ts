export class EventsModel {
    public title: string;
    public date: string;
    public time: string;
    public address: string;

    constructor(myTitle, myDate, myAddress){        
        this.title = myTitle;
        this.date = myDate;
        this.address = myAddress;
    }
}