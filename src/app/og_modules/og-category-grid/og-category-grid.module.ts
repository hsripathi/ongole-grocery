import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgCategoryGridComponent } from './components/og-category-grid/og-category-grid.component';
import { MaterialFormModule } from '../material-form/material-form.module';
import { OGCategoryRoutesModule } from './og-category-grid-routing.module';
import { SlideshowModule } from 'ng-simple-slideshow';


@NgModule({
  imports: [
    CommonModule,
    MaterialFormModule,
    OGCategoryRoutesModule,
    SlideshowModule
  ],
  exports: [ OgCategoryGridComponent ],
  declarations: [ OgCategoryGridComponent ]
})
export class OgCategoryGridModule { }
