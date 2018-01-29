import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxCarousel } from 'ngx-carousel';

/* Data Models */
import { LineTypeModel } from '../../../../datamodels/lineTypeModel';
import { AnnouncementModel } from '../../../../datamodels/announcementModel';

/* Services */
import { CoreService } from '../../../../services/coreServices';

@Component({
  selector: 'pg-home',
  templateUrl: './home.html',
  styleUrls: ['./home.less']
})
export class HomeComponent implements OnInit {
  public mainCarousel: NgxCarousel;
  public homeCards: AnnouncementModel[];
  constructor(private coreService: CoreService) { }

  ngOnInit() { 
    this.mainCarousel = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1, speed: 400, interval: 10000,
      point: { visible: true },
      load: 2, touch: true, loop: true, custom: 'banner'
    }
    this.loadAnnouncements();
  }
  
  public loadCarousel(loadType:string, event: Event) { }

  public loadAnnouncements(){
    var self = this;
    this.coreService.getAnnouncements(function(res){
      if(res.errorMessage == null){
        self.homeCards = res.results;
      }
    });
  }

  public getPageType(type){
    var cardType = type.split("-");
    return cardType[0];
  }

  public isBold(bold){
    return(bold == true? 'bold': '');
  }
}
