import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OGHttpclientService } from '../og_services/og-httpclient/og-httpclient.service';
import { OgGroceryService } from '../og_services/og-grocery/og-grocery.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [ OGHttpclientService, OgGroceryService ]
})
export class OgServicesModule { }
