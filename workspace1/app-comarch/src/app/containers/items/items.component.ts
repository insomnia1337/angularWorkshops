import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { HttpResponseModel } from 'src/app/utils/models';
import { Subject, BehaviorSubject } from 'rxjs';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, OnDestroy {
  items: Array<any>;
  config: Array<any> = [
    { key: 'title' },
    { key: 'price', type: 'input' },
    { key: 'imgSrc', type: 'image' },
    { key: 'id', type: 'button', style: "danger", action: 'remove' }
  ];
  headers = ['Title', 'Price', 'Icon', 'Remove']

  newItem: Subject<any> = new Subject();
  filters: BehaviorSubject<any> = new BehaviorSubject({
    itemsPerPage: 5,
    currentPage: 1
  })
  total: number;
  
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.fetchItems();
    this.newItem.subscribe((value) => {
      this.itemsService.add(value).subscribe((resp) => {
        this.fetchItems();
      })
    })

    this.filters.subscribe((value) => {
      debugger;
      this.fetchItems()
    })
    // this.newItem.next(1);
  }

  private fetchItems() {
    this.itemsService
    .fetch(this.filters.value)
    .subscribe((resp: HttpResponseModel) => {
      console.log(resp);
      this.items = resp.data;
      this.total = resp.total;
    });
  }

  ngOnDestroy(): void {
    console.log('items destroy')
  }

  remove({ id: payload }) {
    this.itemsService.remove(payload).subscribe((resp) => {
      this.fetchItems()
    })
  }

  updateFilters(key, value) {
    debugger;
    this.filters.next({
      ...this.filters.value,
      [key]: value
    })
  }
}
