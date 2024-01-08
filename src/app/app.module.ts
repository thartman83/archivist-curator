import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewrecordComponent } from './newrecord/newrecord.component';
import { RecordViewComponent } from './record-view/record-view.component';

import { RecordService } from './record.service';
import { StatusComponent } from './status/status.component'

import { NgSelect2Module } from "ng-select2";
import { ScanRecordComponent } from './scan-record/scan-record.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewrecordComponent,
    StatusComponent,
    RecordViewComponent,
    ScanRecordComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxDropzoneModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    NgSelect2Module    
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
