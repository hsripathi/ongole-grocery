import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OgModuleModule } from './og_modules/og-module.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OgServicesModule } from './og_services/og-services.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OgModuleModule,
    OgServicesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
