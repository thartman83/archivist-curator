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
  files: File[] = [];
  
  constructor(private _recordService: RecordService,
              private _formBuilder: FormBuilder,
	      private _route: Router, private _el: ElementRef) {
    
    this.newRecordForm = this._formBuilder.group({
      title: new FormControl('', [Validators.required]),
      recordNotes: new FormControl(''),
      file: new FormControl(null, [Validators.required])
    });

    this.submitted = false;
  }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.newRecordForm.patchValue({ title: this.files[0].name,
                                    file: this.files[0]});
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
    // Set the page to busy
    this.submitted = true;
    this.busy(true);

    if(this.newRecordForm.invalid) {
      return;
    }

    let rs = this._recordService;

    try {
      let ret = rs.createRecord(this.newRecordForm);

      ret.subscribe(res => {
        this._route.navigate(['/collection', res.id]);
      });
    } catch {

    }
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

}
