import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms'
import { RecordService } from '../record.service'
import { IRecord } from '../record';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-newrecord',
  templateUrl: './newrecord.component.html',
  styleUrls: ['./newrecord.component.scss']
})
export class NewrecordComponent implements OnInit {
  newRecordForm = this._formBuilder.group({
    recordName: '',
    recordNotes: ''
  });
  
  constructor(private _recordService: RecordService, private _formBuilder: FormBuilder,
	      private _route: Router, private _el: ElementRef) {
  }

  ngOnInit(): void {      

  }

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.newRecordForm.setValue({ recordName: this.files[0].name, recordNotes: ""});
  }
  
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  createRecord() {
    let reader = new FileReader();
    let file = this.files[0];

    // Set the page to busy
    this.busy(true);
    
    reader.readAsDataURL(this.files[0]);
    
    let rs = this._recordService
    this.getBase64(file).then(data => {
      rs.createRecord(this.newRecordForm.controls['recordName'].value, data as string).subscribe((data : IRecord) => {
	this._route.navigate([`record/${data.id}`]);
      });
    });
  }

  onSubmit(): void {
  }

  busy(isBusy: boolean) {
    let form = this._el.nativeElement.querySelector('form');

    if(isBusy) {
      form.classList.add('busy');
    } else {
      form.classList.remove('busy');
    }
  }

  files: File[] = [];

}
