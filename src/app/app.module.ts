import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './routing.module';

//Custom Components
import {CommonHeaderComponent} from './common-header/common-header.component';
import {WidgetNewsComponent} from './widget-news/widget-news.component';
import {MainCompComponent} from './main-comp/main-comp.component';
import {ACompComponent} from './a-comp/a-comp.component';
import {BCompComponent} from './b-comp/b-comp.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    WidgetNewsComponent,
    MainCompComponent,
    ACompComponent,
    BCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
