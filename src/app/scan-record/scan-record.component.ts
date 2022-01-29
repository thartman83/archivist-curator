import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { RecordService } from '../record.service';
import { IRecord } from '../record';

@Component({
  selector: 'app-scan-record',
  templateUrl: './scan-record.component.html',
  styleUrls: ['./scan-record.component.scss']
})
export class ScanRecordComponent implements OnInit {
  scanRecordForm = this._formBuilder.group({
  });

  constructor(private _recordService: RecordService, private _formBuilder: FormBuilder,
	      private _route: Router) { }

  ngOnInit(): void {
  }

  scanRecord() {
    
  }

  createScannedRecord() {
    let ret = {}
    return ret;
  }

}
