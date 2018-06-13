import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgMainLayoutComponent } from './components/og-main-layout/og-main-layout.component';
import { MaterialFormModule } from '../material-form/material-form.module';
import { OgCategoryGridModule } from '../og-category-grid/og-category-grid.module';

import { OgComponentsModule } from '../../og_components/og-components.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialFormModule,
    OgCategoryGridModule,
    OgComponentsModule
  ],
  declarations: [ OgMainLayoutComponent ],
  exports: [ OgMainLayoutComponent ]
})
export class OgLayoutModule { }
