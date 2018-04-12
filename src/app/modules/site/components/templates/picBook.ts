import { Component, Output, Input, EventEmitter, HostListener, ViewChild, ElementRef, Renderer } from '@angular/core';
import {trigger, transition, style, animate, keyframes, query, stagger, group, state, animateChild} from '@angular/animations'

import { PicBookPages } from '../../../../datamodels/picBookPages';

@Component({
  selector:'pic-book',  
  templateUrl: './picBook.html',
  styleUrls: ['./picBook.less', '../../site.styles.less']
})
export class PicBookComponent {   
    @Input() pages: PicBookPages[]; 
    @Input() side: string;
    @Input() colorclass: string;
    @ViewChild('pictureBook') el:ElementRef;
    
    public activeIndex;
    public activePage: PicBookPages;

    constructor(private renderer: Renderer){    }

    ngOnInit() { 
        this.activeIndex = 0;
        this.activePage = (this.pages != null && this.pages.length > 0 ? this.pages[this.activeIndex] : new PicBookPages('','',''));
    }

    navigatePages(direction){
        var newLoc = this.activeIndex + direction;
        if(newLoc >= 0 && newLoc < this.pages.length ){
            this.activeIndex = newLoc;
            this.activePage = this.pages[newLoc];
        }
    }
}