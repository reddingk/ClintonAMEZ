import { Component} from '@angular/core';
import { CmsNavModel } from '../../../../datamodels/cmsNavModel';

@Component({
    templateUrl: './main.html',
    styleUrls: ['./main.less', '../../site.styles.less']
  })
  export class MainComponent {    
    constructor(){ }   

    public navitems: CmsNavModel[] = [
      new CmsNavModel("about us", null, 'site/about-us', [new CmsNavModel("our history", null, 'site/about-us/our-history', null), new CmsNavModel("our staff", null, 'site/about-us/our-staff', null),new CmsNavModel("service information", null, 'site/about-us/our-service', null),new CmsNavModel("inside zion", null, 'http://www.amez.org/', null)]),
      new CmsNavModel("pastors page", null, '', null),
      new CmsNavModel("ministries", null, '', null),
      new CmsNavModel("get connected", null, '', [new CmsNavModel("events calender", null, '', null), new CmsNavModel("clinton resources", null, '', null)]),
      new CmsNavModel("gallery", null, '', null),
      new CmsNavModel("contact us", null, '', null)
    ];
  }