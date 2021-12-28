import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newrecord',
  templateUrl: './newrecord.component.html',
  styleUrls: ['./newrecord.component.scss']
})
export class NewrecordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);

    this.files.push(...event.addedFiles);
  }
  
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  files: File[] = [];

}
