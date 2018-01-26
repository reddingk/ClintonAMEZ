import { Component, OnInit, ViewChild, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

/* Models */
import { CalFilterModel } from '../../../../datamodels/calendarFilterModel';

/* Service */
import { AuthService } from '../../services/authServices';
import { CoreService } from '../../services/coreServices';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  }
};

@Component({
  selector: 'cms-calendar',
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.less', '../../cms.styles.less']
})
export class CalendarComponent implements OnInit {
  
  public view: string = 'month';
  public viewDate: Date = new Date();
  public activeDayIsOpen: boolean = true;
  public refresh: Subject<any> = new Subject(); 

  constructor(private authService: AuthService, private coreService: CoreService, public dialog: MatDialog) { }

  public filters: CalFilterModel[] = [
    new CalFilterModel('General Body', '#ad2121','#FAE3E3'),
    new CalFilterModel('Administrators', '#1e90ff','#D1E8FF')
  ];

  public events: CalendarEvent[] = [];

  ngOnInit() { 
    this.getEvents();
  }  

  /* Toggle Filter */
  toggleFilter(filter: CalFilterModel){
    filter.active = !filter.active;
    this.getEvents();
  }
  /* Get Events */
  getEvents() {
    var self = this;
    var activeList = this.getActiveFilters();

    this.coreService.getEvents(activeList, function(res){
      self.events = res.results;
    });
  }

  /* Get Active Filters */
  getActiveFilters(){
    var activeList = [];
    for(var i =0; i < this.filters.length; i++){
      if(this.filters[i].active == true){
        activeList.push(this.filters[i].title);
      }
    }

    return activeList;
  }
  /* refresh view */
  refreshView(): void {    
    this.activeDayIsOpen = false;    
    this.refresh.next();
  }

  /* Clicked Day */
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  /* Handle Click Event */
  handleEvent(action: string, myEvent: CalendarEvent, newEvent: Boolean): void {
    let dialogRef = this.dialog.open(EventDialog, {      
      data: { event: myEvent, new: newEvent }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');      
    });
  }

  /* Event Time Change */
  public eventTimesChanged({ event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event, false);
    this.refresh.next();
  }

}

@Component({
  selector: 'event-dialog',
  templateUrl: 'event-dialog.html',
  styleUrls: ['./calendar.less', '../../cms.styles.less']
})
export class EventDialog {
  constructor(private coreService: CoreService, private toastr: ToastrService, public dialogRef: MatDialogRef<EventDialog>,@Inject(MAT_DIALOG_DATA) public data: any) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
