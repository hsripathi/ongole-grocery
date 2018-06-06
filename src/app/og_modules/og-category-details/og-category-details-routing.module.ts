import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OgCategoryDetailsComponent } from './components/og-category-details/og-category-details.component';

const OG_CATEGORY_DETAILS_ROUTES: Routes = [
    {
        path: "",
        component: OgCategoryDetailsComponent
    }
];


export const OGCategoryDetailsRoutesModule = RouterModule.forChild(OG_CATEGORY_DETAILS_ROUTES);
