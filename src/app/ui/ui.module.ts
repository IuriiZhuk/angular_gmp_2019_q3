import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [MainHeaderComponent, MainFooterComponent, BreadcrumbsComponent, SearchBarComponent],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
