import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
  {
    path: "",
    loadChildren: './og_modules/og-category-grid/og-category-grid.module#OgCategoryGridModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
