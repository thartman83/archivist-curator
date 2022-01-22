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
    
    reader.readAsDataURL(this.files[0]);
    
    let rs = this._recordService
    this.getBase64(file).then(data => rs.createRecord('NewName', data as string).subscribe());
  }

  onSubmit(): void {
  }

  files: File[] = [];

}
