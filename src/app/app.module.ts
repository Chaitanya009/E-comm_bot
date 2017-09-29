import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { RightSidebarComponent } from './shared/right-sidebar/rightsidebar.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FileUploadModule } from "ng2-file-upload";

//Facebook imports
import { FacebookModule } from 'ngx-facebook';


const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/component/accordion/accordion.module#AccordionModule'
  },{
    path: 'table',
    loadChildren: './pages/starter/starter.module#StarterModule'
  },{
    path: 'dashboard',
    loadChildren: './pages/component/accordion/accordion.module#AccordionModule'
  },{
    path: 'alert',
    loadChildren: './pages/component/alert/alert.module#NgAlertModule'
  },{
    path: 'carousel',
    loadChildren: './pages/component/carousel/carousel.module#ButtonsModule'
  },{
    path: 'datepicker',
    loadChildren: './pages/component/datepicker/datepicker.module#DatepickerModule'
  },{
    path: 'dropdown',
    loadChildren: './pages/component/dropdown-collapse/dropdown-collapse.module#DropdownModule'
  },{
    path: 'coupon',
    loadChildren: './pages/component/modal/modal.module#ModalModule'
  },{
    path: 'pagination',
    loadChildren: './pages/component/pagination/pagination.module#paginationModule'
  },{
    path: 'Popovertooltip',
    loadChildren: './pages/component/popover-tooltip/popover-tooltip.module#PopoverTooltipModule'
  },{
    path: 'analytics',
    loadChildren: './pages/component/progressbar/progressbar.module#progressbarModule'
  },{
    path: 'rating',
    loadChildren: './pages/component/rating/rating.module#RatingModule'
  },{
    path: 'broadcasting',
    loadChildren: './pages/component/tabs/tabs.module#TabsModule'
  },{
    path: 'timepicker',
    loadChildren: './pages/component/timepicker/timepicker.module#TimepickerModule'
  },{
    path: 'typehead',
    loadChildren: './pages/component/typehead/typehead.module#TypeheadModule'
  },{
    path: 'fontawesome',
    loadChildren: './pages/icons/fontawesome/fontawesome.module#FontawesomeModule'
  },{
    path: 'brands',
    loadChildren: './pages/icons/simpleline/simpleline.module#SimplelineIconModule'
  },{
    path: 'material',
    loadChildren: './pages/icons/material/material.module#MaterialComponentModule'
  },{
    path: 'product/:id',
    component: TestComponent
  },{
    path: 'product',
    component: TestComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    RightSidebarComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FacebookModule.forRoot(),
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
