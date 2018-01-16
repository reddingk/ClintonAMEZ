import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AGMaterialModule } from '../../material';
import { RouterModule, Routes } from '@angular/router';

import { CoreDirective } from './directives/core.directive';
import { CMSCoreComponent } from './components/core/core';
import { SignInComponent } from './components/signin/signin';
import { HomeComponent } from './components/home/home';

import { AuthService } from './services/authServices';
/* Routes */
const appRoutes: Routes = [    
    { path:'v-editor', component: CMSCoreComponent}  
];

@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    NoopAnimationsModule,
    AGMaterialModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: false } )
  ],
  declarations: [CMSCoreComponent, CoreDirective, SignInComponent, HomeComponent],
  providers: [AuthService],
  entryComponents: [ SignInComponent, HomeComponent],
  exports: []
})
export class CMSModule { }