import { Component, Output, Input, EventEmitter, HostListener, ViewChild, ElementRef, Renderer } from '@angular/core';
import {trigger, transition, style, animate, state} from '@angular/animations'

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

    public additonalMenu = {display: false, items:[]};

    constructor(private renderer: Renderer){}

    toggleSideNav() {
      this.toggleEvent.next();
    }
    
    showAdditionalMenu(menu){
      if(menu != null){
        this.additonalMenu.items = menu;
        this.additonalMenu.display = true;
      }
      else {
        this.additonalMenu.display = false;
        this.additonalMenu.items = [];
      }
    }

    hideAdditionalMenu(){
      if(this.additonalMenu.display == true){
        this.additonalMenu.display = false;
        this.additonalMenu.items = [];
      }
    }
}