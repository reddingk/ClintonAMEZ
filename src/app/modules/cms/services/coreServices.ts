import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserInfoModel } from '../../../datamodels/userInfoModel';

@Injectable()
export class CoreService {
    public userKey: string = "clintonEditorUser";
    constructor(private http: HttpClient) { }

}