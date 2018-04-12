import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { PicBookPages } from '../../../../datamodels/picBookPages';
@Component({
  selector: 'pg-ourHistory',
  templateUrl: './ourHistory.html',
  styleUrls: ['./ourHistory.less']
})
export class OurHistoryComponent implements OnInit {
  constructor() { }
  public story1: PicBookPages[] = [
    new PicBookPages('','The African Methodist Episcopal Zion Connection is an international Christian denomination. Its main roots stem from the founding of the Methodist denomination in England by John Wesley, a priest in the Anglican Church (Church of England) in 1738. Wesley led a group of people who believed the Church should make greater efforts to reach the poor and working class. Because of their structured and methodical forms of services and activities, their associates deridingly called them "Methodist."','assets/images/tmpMedia/Clinton_2012.jpg'),
    new PicBookPages('','In 1766, three lay Methodists began missionary work in the American Colonies. Black freemen and slaves were included among the early Methodist converts. Because Methodists and Baptists were willing to ordain Blacks as preachers, the number of Blacks in these two denominations grew rapidly to about one-fourth of these denominations by 1797.','assets/images/tmpMedia/Clinton_2012.jpg'),
    new PicBookPages('','Whites in some congregations felt the role of Blacks should be subordinate and insisted on segregating the congregation, placing Blacks in the balcony, having them to receive the sacraments last, and restricting their participation in members’ meetings. The dissatisfaction with these practices led to the desire to separate, and with the help of liberal members of the congregations they formed three separatists movements, one of which resulted in the formation of African Methodist Episcopal Zion Church.','assets/images/tmpMedia/Clinton_2012.jpg'),
    new PicBookPages('','The African Methodist Episcopal Zion Church was organized in 1796 by James Varick and others in New York City out of the John Street Methodist Episcopal Church, which had Black members as early as 1765. The group was granted permission from Bishop Francis Asbury to hold their separate meetings. In the fall of 1800 they completed and dedicated a church in New York City.','assets/images/tmpMedia/Clinton_2012.jpg'),
    new PicBookPages('','The black church maintained cooperative relationships with the white Methodist Church, but in 1820 this cooperation failed. The Zion members joined with separate black congregations in other cities; in 1821 they held an annual conference and elected James Varick as their first bishop. A form of Discipline was selected which differs only slightly from that of the Methodist Episcopal Church.','assets/images/tmpMedia/Clinton_2012.jpg')
  ];
  public story2: PicBookPages[] = [
    new PicBookPages('','story 2 page1','assets/images/tmpMedia/Clinton_2012.jpg'),
    new PicBookPages('','story 2 page2','assets/images/tmpMedia/Clinton_2012.jpg'),
    new PicBookPages('','story 2 page3','assets/images/tmpMedia/Clinton_2012.jpg'),
    new PicBookPages('','story 2 page4','assets/images/tmpMedia/Clinton_2012.jpg'),
    new PicBookPages('','story 2 page5','assets/images/tmpMedia/Clinton_2012.jpg')
];
  ngOnInit() { }   
}
