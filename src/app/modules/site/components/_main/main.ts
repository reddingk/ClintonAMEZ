import { Component} from '@angular/core';
import { CmsNavModel } from '../../../../datamodels/cmsNavModel';

@Component({
    templateUrl: './main.html',
    styleUrls: ['./main.less', '../../site.styles.less']
  })
  export class MainComponent {    
    constructor(){ }   

    public navitems: CmsNavModel[] = [
      new CmsNavModel("about us", null, 'site/about-us'),
      new CmsNavModel("get connected", null, ''),
      new CmsNavModel("ministries", null, ''),
      new CmsNavModel("pastors page", null, ''),
      new CmsNavModel("gallery", null, ''),
      new CmsNavModel("contact us", null, '')
    ];
  }