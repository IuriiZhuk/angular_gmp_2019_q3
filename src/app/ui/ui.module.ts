import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LogoComponent } from './logo/logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighlightedRelevantDirective } from './directives/highlighted-relevant.directive';

const COMPONENTS = [
  MainHeaderComponent,
  MainFooterComponent,
  BreadcrumbsComponent,
  SearchBarComponent,
  LogoComponent,
];


@NgModule({
  declarations: [
    ...COMPONENTS,
    HighlightedRelevantDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [
    ...COMPONENTS,
    FontAwesomeModule,
    HighlightedRelevantDirective,
  ],
})
export class UiModule { }
