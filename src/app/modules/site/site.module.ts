import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AGMaterialModule } from '../../material';
import { RouterModule, Routes } from '@angular/router';
import { NgxCarouselModule } from 'ngx-carousel';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import 'hammerjs';

/* Site Components */
import { MainComponent} from './components/_main/main';
import { HomeComponent } from './components/home/home';
import { AboutUsComponent } from './components/aboutus/aboutus';
import { OurHistoryComponent } from './components/ourHistory/ourHistory';
import { OurStaffComponent } from './components/ourStaff/ourStaff';

/* Templates */
import { HeaderComponent } from './components/templates/header';
import { FooterComponent } from './components/templates/footer';
import { PicBookComponent } from './components/templates/picBook';

/* Routes */
const appRoutes: Routes = [    
    { path:'', redirectTo:'/site', pathMatch: 'full'},
    { 
        path:'site',
        component: MainComponent,
        children:[
            { path:'', component: HomeComponent },
            { path:'about-us', component: AboutUsComponent },
            { path:'about-us', children:[
                {path:'our-history', component: OurHistoryComponent},
                {path:'our-staff', component: OurStaffComponent}
            ]}
        ]
    }  
];

@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    AGMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxCarouselModule,
    NoopAnimationsModule,    
    RouterModule.forRoot(appRoutes,{ enableTracing: false } )
  ],
  declarations: [ MainComponent, HomeComponent, AboutUsComponent, OurHistoryComponent, OurStaffComponent, HeaderComponent, FooterComponent, PicBookComponent ],
  exports: []
})
export class SiteModule { }
