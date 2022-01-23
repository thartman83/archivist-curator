import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewrecordComponent } from './newrecord/newrecord.component';
import { RecordViewComponent } from './record-view/record-view.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent},
  { path: "newrecord", component: NewrecordComponent},
  { path: "status", component: StatusComponent},
  { path: "record/:recordid", component: RecordViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
