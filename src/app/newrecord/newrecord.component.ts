import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { RecordService } from '../record.service'
import { IRecord } from '../record';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-newrecord',
  templateUrl: './newrecord.component.html',
  styleUrls: ['./newrecord.component.scss']
})
export class NewrecordComponent implements OnInit {
  newRecordForm: FormGroup;
  submitted: boolean;
  
  constructor(private _recordService: RecordService, private _formBuilder: FormBuilder,
	      private _route: Router, private _el: ElementRef) {
    
    this.newRecordForm = this._formBuilder.group({
      recordName: new FormControl('', [Validators.required]),
      recordNotes: new FormControl(''),
      newFile: new FormControl(null,[Validators.required])
    });

    this.submitted = false;    
  }

  ngOnInit(): void {    
  }

  onSelect(event: any) {    
    this.files.push(...event.addedFiles);
    this.newRecordForm.patchValue({ recordName: this.files[0].name, newFile: this.files[0].name});
  }
  
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
    this.newRecordForm.patchValue({ newFile: ''});
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
    this.submitted = true;
    this.busy(true);

    if(this.newRecordForm.invalid) {
      return;
    }
    
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
