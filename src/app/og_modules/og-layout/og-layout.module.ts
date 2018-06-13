import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgMainLayoutComponent } from './components/og-main-layout/og-main-layout.component';
import { MaterialFormModule } from '../material-form/material-form.module';
import { OgCategoryGridModule } from '../og-category-grid/og-category-grid.module';
import { OgCartNavComponent } from './../../og_components/og-cart-nav/og-cart-nav.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialFormModule,
    OgCategoryGridModule
  ],
  declarations: [ OgMainLayoutComponent, OgCartNavComponent ],
  exports: [ OgMainLayoutComponent ]
})
export class OgLayoutModule { }
