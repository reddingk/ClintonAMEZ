import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

/* Site Components */
import { MainComponent} from './components/_main/main';
import { HomeComponent } from './components/home/home';
import { AboutUsComponent } from './components/aboutus/aboutus';


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
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: false } )
  ],
  declarations: [MainComponent, HomeComponent, AboutUsComponent],
  exports: []
})
export class SiteModule { }
