import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AGMaterialModule } from '../../material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'angular-calendar';

import { CoreDirective } from './directives/core.directive';
import { CMSCoreComponent } from './components/core/core';
import { SignInComponent } from './components/signin/signin';
import { HomeComponent } from './components/home/home';
import { SettingsComponent } from './components/settings/settings';
import { AdminComponent, EditUserDialog } from './components/admin/admin';
import { CalendarComponent } from './components/calendar/calendar';

import { AuthService } from './services/authServices';
import { CoreService } from './services/coreServices';
/* Routes */
const appRoutes: Routes = [    
    { path:'v-editor', component: CMSCoreComponent}  
];

@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AGMaterialModule,
    CalendarModule.forRoot(),
    RouterModule.forRoot(appRoutes,{ enableTracing: false } )
  ],
  declarations: [CMSCoreComponent, CoreDirective, SignInComponent, HomeComponent, SettingsComponent, AdminComponent, EditUserDialog, CalendarComponent],
  providers: [AuthService, CoreService],
  entryComponents: [SignInComponent, HomeComponent, SettingsComponent, AdminComponent, EditUserDialog, CalendarComponent],
  exports: []
})
export class CMSModule { }
