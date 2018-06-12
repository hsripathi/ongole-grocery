import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgCategoryDetailsComponent } from './components/og-category-details/og-category-details.component';
import { OGCategoryDetailsRoutesModule } from './og-category-details-routing.module';
import { MaterialFormModule } from '../material-form/material-form.module';
import { OgProductComponent } from '../../og_components/og-product/og-product.component';



@NgModule({
  imports: [
    CommonModule,
    OGCategoryDetailsRoutesModule,
    MaterialFormModule
  ],
  declarations: [ OgCategoryDetailsComponent, OgProductComponent ]
})
export class OgCategoryDetailsModule { }
