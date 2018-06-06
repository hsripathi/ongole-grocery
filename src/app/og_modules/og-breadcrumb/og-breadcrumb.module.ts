import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgBreadcrumbComponent } from './components/og-breadcrumb/og-breadcrumb.component';
import { OgBreadcrumbService } from './services/og-breadcrumb.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ OgBreadcrumbService ],
  declarations: [ OgBreadcrumbComponent ],
  exports: [ OgBreadcrumbComponent ]
})
export class OgBreadcrumbModule { }
