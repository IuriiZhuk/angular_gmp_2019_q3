import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingComponent } from './loading/loading.component';
import {TagsInputComponent} from './tags-input/tags-input.component';
import {TranslateModule} from '@ngx-translate/core';

const COMPONENTS = [
  MainHeaderComponent,
  MainFooterComponent,
  BreadcrumbsComponent,
  SearchBarComponent,
  LogoComponent,
  NotFoundComponent,
  LoadingComponent,
  TagsInputComponent,
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
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AuthModule,
    ReactiveFormsModule,
    TranslateModule,
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
