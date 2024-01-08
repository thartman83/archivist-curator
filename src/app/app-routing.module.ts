import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { NewrecordComponent } from './newrecord/newrecord.component';
import { RecordViewComponent } from './record-view/record-view.component';
import { ScanRecordComponent } from './scan-record/scan-record.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent},
  { path: "newrecord", component: NewrecordComponent},
  { path: "scanrecord", component: ScanRecordComponent},
  { path: "status", component: StatusComponent},
  { path: "collection/:collectionid", component: CollectionComponent},
  { path: "record/:recordid", component: RecordViewComponent },
  { path: "config", component: ConfigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
