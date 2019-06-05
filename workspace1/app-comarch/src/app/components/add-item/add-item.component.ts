import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Input() newItem: Subject<any>;
  constructor(private modalService: NgbModal) { 
  
  }

  ngOnInit() {
  }

  open(content) {
    console.log(content)
    this.modalService.open(content)
  }

  sendItem(value) {
    debugger;
    this.newItem.next(value)
  }
}
