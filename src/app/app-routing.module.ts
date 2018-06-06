import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [

  {
    path: ":categoryName",
    loadChildren: './og_modules/og-category-details/og-category-details.module#OgCategoryDetailsModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
