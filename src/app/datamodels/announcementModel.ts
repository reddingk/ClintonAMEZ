import { LineTypeModel } from './lineTypeModel';

export class AnnouncementModel {
    public media: string;
    public defaultMedia: string;
    public type: string;
    public title: string;
    public lines: LineTypeModel[];    

    constructor(myMedia, myType, myTitle, myLines){
        this.media = myMedia;
        this.type = myType;
        this.title = myTitle;
        this.lines = myLines;
    }
}