export class CmsMessageModel {
    public subject: string;
    public color: string;
    public author: string;
    public message: string;
    public date: string;    

    constructor(mySubject, myColor, myMessage){
        this.subject = mySubject;
        this.color = myColor;        
        this.message = myMessage;
    }
}