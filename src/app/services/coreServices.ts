import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserInfoModel } from '../datamodels/userInfoModel';
import { AnnouncementModel } from '../datamodels/announcementModel';
import { LineTypeModel } from '../datamodels/lineTypeModel';
import { MinistryModel } from '../datamodels/ministryModel';
import { EventsModel } from '../datamodels/eventsModel';

import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { CalendarEvent } from 'angular-calendar';

@Injectable()
export class CoreService {
    public userKey: string = "clintonEditorUser";
    constructor(private http: HttpClient) { }
    
    public features = {        
        "announcements": { "navItem":'fa-bullhorn'},
        "forms": { "navItem":'fa-clipboard'},
        "calender": { "navItem":'fa-calendar-alt'},
        "gallery": { "navItem":'fa-images'},
        "ministries": { "navItem":'fa-child'}
    };

    public tmpEvents = {
        "General Body":[{
          start: subDays(startOfDay(new Date()), 1),
          end: addDays(new Date(), 1),
          title: 'A 3 day event',
          color: { primary: '#ad2121', secondary: '#FAE3E3' }
        },
        {
          start: startOfDay(new Date()),
          title: 'An event with no end date',
          color: { primary: '#ad2121', secondary: '#FAE3E3' }
        }],
        "Administrators":[{
          start: subDays(endOfMonth(new Date()), 3),
          end: addDays(endOfMonth(new Date()), 3),
          title: 'A long event that spans 2 months',
          color: { primary: '#1e90ff', secondary: '#D1E8FF' }
        },
        {
          start: addHours(startOfDay(new Date()), 2),
          end: new Date(),
          title: 'A draggable and resizable event',
          color: { primary: '#1e90ff', secondary: '#D1E8FF' }     
        }]
    };

    getFeatureList(){
        return this.features;
    }

    getEvents(filterList:string[], callback){
        var retList: CalendarEvent[] = [];

        for(var i=0; i < filterList.length; i++){            
            if(filterList[i] in this.tmpEvents){
                retList = retList.concat(this.tmpEvents[filterList[i]]);
            }
        }        
        callback({"errorMessage":null,"results":retList});
    }

    getAnnouncements(callback){
        var vidAnnouncement: AnnouncementModel=  new AnnouncementModel("assets/images/tmpMedia/tmpVideo.mp4", "full-video",null, null);
        vidAnnouncement.defaultMedia = "assets/images/tmpMedia/tmpVide_mini.JPG";

        var tmpList1: LineTypeModel[] = [
            new LineTypeModel("We are marking our 150th year as a continuing congregation.", "h1", true),
            new LineTypeModel("Our vision is to affect a completely transformed community of faith, worthy of citizenship in the Kingdom of God, by the power of God through His Son Jesus Christ. Our mission is to produce ministries that will serve the CAUSE of Christ through the spiritual transformation of minds, bodies and spirits.", "paragraph", false),
            new LineTypeModel("Sunday morning worship services begin at 10:00 AM.  Visitors, we encourage you to be sure to explore our 'Galleries' tab.", "paragraph", true)
        ];
        var tmpList2: LineTypeModel[] = [
            new LineTypeModel("Uplifting and Informative", "h2",true),
            new LineTypeModel("Music, Wellness,Special Events and Outreach Ministries", "h2",true),
            
            new LineTypeModel("Spiritual Insights", "h2",true),
            new LineTypeModel("Dynamic monthly 1st Friday Dinner and Seminar", "h2",true),

            new LineTypeModel("Engaging Youth and Children Ministries", "h2",true),
            new LineTypeModel("Including Children’s Church", "h2",true),
        ];
        var tmpList3: LineTypeModel[] = [
            new LineTypeModel("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "p", false),
            new LineTypeModel("Date: February 18, 2018", "p",true),
            new LineTypeModel("Time: 2pm", "p",true)
        ];

        var retList: AnnouncementModel[] = [
            //vidAnnouncement,
            new AnnouncementModel("", "cover-title","Welcome To Clinton", []),            
            new AnnouncementModel("assets/images/tmpMedia/pastor1.jpg","card-img", "Welcome", tmpList1),
            new AnnouncementModel("assets/images/tmpMedia/Clinton_2012.jpg","card-img", "Clinton For Your Spirit, Mind and Body", tmpList2),
            new AnnouncementModel("assets/images/tmpMedia/Homecoming-Flyer.png","card-img", "New Event", tmpList3)
        ];

        callback({"errorMessage":null,"results":retList});
    }

    getMinistries(callback){
        var tmpMins: MinistryModel[] = [
            new MinistryModel("Lay Council","assets/images/tmpMedia/c1.jpg"),
            new MinistryModel("Admin & Tech","assets/images/tmpMedia/c5.jpg"),
            new MinistryModel("Christian Education","assets/images/tmpMedia/c6.jpg"),
            new MinistryModel("Men of Varick","assets/images/tmpMedia/c4.jpg"),
            new MinistryModel("Faith & Social Justice Ministry","assets/images/tmpMedia/c3.jpg"),
            new MinistryModel("WHOMS","assets/images/tmpMedia/c2.jpg"),
            new MinistryModel("Women of Zion","assets/images/tmpMedia/c7.jpg"),
            new MinistryModel("Senior Ministry (Gems)","assets/images/tmpMedia/c6.jpg"),
            new MinistryModel("Young Adult Missionary Society","assets/images/tmpMedia/c9.jpg"),
            new MinistryModel("Bags of Hope","assets/images/tmpMedia/c6.jpg")
        ];

        callback({"errorMessage":null,"results":tmpMins});
    }

    getTmpEvents(callback){
        var tmpEvents: EventsModel[] = [
            new EventsModel("Leadership Meeting", addDays(new Date(), 3), "1 Test Street, Gaithersburg, MD. 20878"),
            new EventsModel("Test Event 2", addDays(new Date(), 7), "1 Test Street, Gaithersburg, MD. 20878"),
            new EventsModel("Test Event 3", addDays(new Date(), 14), "1 Test Street, Gaithersburg, MD. 20878"),
            new EventsModel("Leadership Meeting 2", addDays(new Date(), 15), "1 Test Street, Gaithersburg, MD. 20878"),
            new EventsModel("Leadership Meeting 3", addDays(new Date(), 20), "1 Test Street, Gaithersburg, MD. 20878")
        ];
        callback({"errorMessage":null,"results":tmpEvents});
    }    
}