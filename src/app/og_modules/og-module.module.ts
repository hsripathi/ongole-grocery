import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgLayoutModule } from './og-layout/og-layout.module';
import { MaterialFormModule } from './material-form/material-form.module';

@NgModule({
  imports: [
    CommonModule,
    OgLayoutModule,
    MaterialFormModule
  ],
  exports: [ OgLayoutModule, MaterialFormModule ],
  declarations: []
})
export class OgModuleModule { }
