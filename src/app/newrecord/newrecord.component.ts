import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { RecordService } from '../record.service'

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
  
  constructor(private _recordService: RecordService, private _formBuilder: FormBuilder) {    
  }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);

    this.files.push(...event.addedFiles);
  }
  
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  createRecord() {
    //this._recordService.createRecord().subscribe()
    console.log('here')
  }

  onSubmit(): void {
  }

  files: File[] = [];

}
