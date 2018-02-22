import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AGMaterialModule } from '../../material';
import { RouterModule, Routes } from '@angular/router';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

/* Site Components */
import { MainComponent} from './components/_main/main';
import { HomeComponent } from './components/home/home';
import { AboutUsComponent } from './components/aboutus/aboutus';
import { HeaderComponent } from './components/templates/header';
import { FooterComponent } from './components/templates/footer';


/* Routes */
const appRoutes: Routes = [    
    { path:'', redirectTo:'/site', pathMatch: 'full'},
    { 
        path:'site',
        component: MainComponent,
        children:[
            { path:'', component: HomeComponent },
            { path:'about-us', component: AboutUsComponent }
        ]
    }  
];

@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    AGMaterialModule,
    NgxCarouselModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: false } )
  ],
  declarations: [MainComponent, HomeComponent, AboutUsComponent, HeaderComponent, FooterComponent],
  exports: []
})
export class SiteModule { }
