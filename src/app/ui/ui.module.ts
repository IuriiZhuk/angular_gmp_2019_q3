import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LogoComponent } from './logo/logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/* Directives */
import { HighlightedRelevantDirective } from './directives/highlighted-relevant.directive';
/* Pipes */
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByDatePipe } from './pipes/order-by-date.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AuthModule } from '../core/auth/auth.module';

const COMPONENTS = [
  MainHeaderComponent,
  MainFooterComponent,
  BreadcrumbsComponent,
  SearchBarComponent,
  LogoComponent,
];

const PIPES = [
  DurationPipe,
  OrderByDatePipe,
  FilterPipe,
];


@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    HighlightedRelevantDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AuthModule,
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES,
    FontAwesomeModule,
    HighlightedRelevantDirective,
  ],
  providers: [
    ...PIPES,
  ],
})
export class UiModule { }
