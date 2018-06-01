import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgMainLayoutComponent } from './components/og-main-layout/og-main-layout.component';
import { MaterialFormModule } from '../material-form/material-form.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialFormModule
  ],
  declarations: [ OgMainLayoutComponent ],
  exports: [ OgMainLayoutComponent ]
})
export class OgLayoutModule { }
