import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service'
import { IStatus } from '../status'

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  _status: IStatus | undefined
  
  constructor(private _statusService: StatusService) {
    this._status = { up: false }
    this._statusService.getStatus().subscribe((data: IStatus) => {
      this._status = {...data}
    });    
  }

  ngOnInit(): void {
  }

  getType(val: any): string {
    return typeof val;
  }
  
}
