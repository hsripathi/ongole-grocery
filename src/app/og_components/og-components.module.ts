import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgProductComponent } from '../og_components/og-product/og-product.component';
import { OgCartNavComponent } from '../og_components/og-cart-nav/og-cart-nav.component';
import { MaterialFormModule } from '../og_modules/material-form/material-form.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialFormModule
  ],
  declarations: [ OgProductComponent, OgCartNavComponent ],
  exports: [ OgProductComponent, OgCartNavComponent ]
})
export class OgComponentsModule { }
