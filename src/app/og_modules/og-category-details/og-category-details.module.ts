import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgCategoryDetailsComponent } from './components/og-category-details/og-category-details.component';
import { OGCategoryDetailsRoutesModule } from './og-category-details-routing.module';
import { MaterialFormModule } from '../material-form/material-form.module';
import { OgComponentsModule } from '../../og_components/og-components.module';
@NgModule({
  imports: [
    CommonModule,
    OGCategoryDetailsRoutesModule,
    MaterialFormModule,
    OgComponentsModule
  ],
  declarations: [ OgCategoryDetailsComponent ]
})
export class OgCategoryDetailsModule { }
