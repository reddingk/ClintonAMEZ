import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'pg-ourStaff',
  templateUrl: './ourStaff.html',
  styleUrls: ['./ourStaff.less']
})
export class OurStaffComponent implements OnInit {
  constructor() { }
  
  public staffList = [
      {"name":"Administrative Team", "members":[
          {"name":"Ms. Jonice Adams & Ms. Donna Cawley", "title":"Co-Directors, Communication & Brand Management"},
          {"name":"Mrs. Robin Avant Brown", "title":"Director, Special Events"},
          {"name":"Mr. Ricky Capers", "title":"Treasurer"},
          {"name":"Ms. Gina Snowden Harrell", "title":"Quarterly Conference Secretary"},
          {"name":"Mr. Timothy K. Johnson", "title":"Director, Media & Technology"},
          {"name":"Mrs. Cristina Palmer-Moore", "title":"Director, Scheduling & Space Management"},
          {"name":"Ms. Sharon Tucker", "title":"Ministry of Kindness Steward"},
          {"name":"Mrs. Verna Woodson", "title":"Financial Secretary"}
      ]},
      {"name":"Board Leadership", "members":[
          {"name":"Mr. Felton Armstrong", "title":"Preacher's Steward & Chair or Steward Board"},
          {"name":"Mr. Dwayne Holloway", "title":"Immediate Past Chair, Trustee Board"},
          {"name":"Mrs. Alvanell Thompson", "title":"Leader of Leaders"}
      ]},
      {"name":"Clergy", "members":[
        {"name":"Rev. Dr. E. Marie Johnson", "title":""},
        {"name":"Rev. Deborah Johnson-Mosley", "title":""},
        {"name":"Rev. Dr. Barbara Quinton", "title":""}
    ]}
  
  ];

  ngOnInit() { }   
}
