import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AGMaterialModule } from '../../material';
import { RouterModule, Routes } from '@angular/router';

import { CMSCoreComponent } from './components/core/core';

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
  declarations: [CMSCoreComponent],
  exports: []
})
export class CMSModule { }
