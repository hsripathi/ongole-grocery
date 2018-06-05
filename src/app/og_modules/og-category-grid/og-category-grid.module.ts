import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgCategoryGridComponent } from './components/og-category-grid/og-category-grid.component';
import { MaterialFormModule } from '../material-form/material-form.module';
import { OGCategoryRoutesModule } from './og-category-grid-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialFormModule,
    OGCategoryRoutesModule
  ],
  exports: [ OgCategoryGridComponent ],
  declarations: [ OgCategoryGridComponent ]
})
export class OgCategoryGridModule { }
