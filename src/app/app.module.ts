import { RouterModule } from '@angular/router';
import { SidebarnavComponent } from './material/sidebarnav/sidebarnav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MychartsComponent } from './echarts/mycharts/mycharts.component';
import { DrawchartComponent } from './echarts/drawchart/drawchart.component';
import { MainComponent } from './echarts/main/main.component';
import { EchartsInstanceComponent } from './echarts/echarts-instance/echarts-instance.component';
import { FlexboxPracComponent } from './flexbox/flexbox-prac/flexbox-prac.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarnavComponent,
    MychartsComponent,
    DrawchartComponent,
    MainComponent,
    EchartsInstanceComponent,
    FlexboxPracComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxEchartsModule,
    RouterModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
