import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {WidgetNewsComponent} from './widget-news/widget-news.component';
import {MainCompComponent} from './main-comp/main-comp.component';
import {ACompComponent} from './a-comp/a-comp.component';
import {BCompComponent} from './b-comp/b-comp.component';

//Navigation to views
let routes:Routes = [
	{path: "", component: WidgetNewsComponent},
	{path: "posts", component: WidgetNewsComponent},
	{path: "dataSharing", component: MainCompComponent}
]


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports:[RouterModule]
})

export class AppRoutingModule {
	
}