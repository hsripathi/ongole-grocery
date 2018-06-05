import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OgCategoryGridComponent } from './components/og-category-grid/og-category-grid.component';

const OG_CATEGORY_ROUTES: Routes = [
    {
        path: "",
        component: OgCategoryGridComponent
    }
];


export const OGCategoryRoutesModule = RouterModule.forChild(OG_CATEGORY_ROUTES);
