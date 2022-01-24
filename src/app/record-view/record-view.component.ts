import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecord } from 'src/app/record';
import { RecordService } from '../record.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-record-view',
  templateUrl: './record-view.component.html',
  styleUrls: ['./record-view.component.scss']
})
export class RecordViewComponent implements OnInit {

  _record: IRecord | undefined;
  _pagesData: SafeUrl[];

  constructor(private _route: ActivatedRoute, private _recordService: RecordService,
	      private _domSanitizer: DomSanitizer) {
    let recordId = Number(this._route.snapshot.paramMap.get('recordid'));
    this._pagesData = [];
    
    this._recordService.getRecord(recordId).subscribe((data : IRecord) => {
      this._record = {...data};
      console.log(this._record);
      for(let i = 0; i < this._record.pages.length; ++i) {
	this._pagesData[i] = this._domSanitizer.bypassSecurityTrustUrl('data:image/png;base64, ' + this._record.pages[i].data);
      }
    });
  }

ngOnInit(): void {
  
  } 

}
