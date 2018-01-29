import { Component, Output, Input, EventEmitter, HostListener, ViewChild, ElementRef, Renderer } from '@angular/core';
import { CmsNavModel } from '../../../../datamodels/cmsNavModel';

@Component({
  selector:'my-header',
  templateUrl: './header.html',
  styleUrls: ['./header.less', '../../site.styles.less']
})
export class HeaderComponent {
    @Output() toggleEvent = new EventEmitter<string>();
    @Input() navitems: CmsNavModel[];    
    @ViewChild('clintonHeader') el:ElementRef;
    constructor(private renderer: Renderer){}

    toggleSideNav() {
      this.toggleEvent.next();
    }    
}