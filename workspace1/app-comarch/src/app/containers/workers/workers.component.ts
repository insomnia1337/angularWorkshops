import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {
  items: Array<any>;
  config: Array<any> = [
    { key: 'name' },
    { key: 'phone', type: 'input' },
    { key: 'id', type: 'button', style: 'danger', action: 'remove' },
    { key: 'id', type: 'button', style:'primary', action: 'more' }
  ]
  headers = ['Name', 'Phone', 'Remove', 'More']
  constructor(private workersService: WorkersService) { }

  ngOnInit() {
    this.workersService.fetch().subscribe((resp) => {
      this.items = resp.data;
      console.log(resp)
    })
  }

}
