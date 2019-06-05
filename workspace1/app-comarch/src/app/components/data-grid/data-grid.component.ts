import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input() data: any[];
  @Input() config: Array<string>;
  @Input() headers: Array<string>
  @Output() actionEvent = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  action(type: string, payload: string) {
    this.actionEvent.emit({type, id: payload})
  }
}
