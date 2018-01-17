import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserInfoModel } from '../../../datamodels/userInfoModel';
import { CmsMessageModel } from '../../../datamodels/cmsMessages';

@Injectable()
export class CoreService {
    public userKey: string = "clintonEditorUser";
    constructor(private http: HttpClient) { }

    public tmpNotes: CmsMessageModel[] = [];

    public getAllNotes(callback){
        callback({"data":this.tmpNotes, "errorMessage":null});
    }
    
    public addNote(note: CmsMessageModel, callback) {
        note.date = (new Date()).toDateString();
        note.author = "current User";
        this.tmpNotes.push(note);
        callback({"status":true, "errorMessage":null});
    }
}