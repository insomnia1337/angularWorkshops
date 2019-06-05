import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounce, debounceTime, map, filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @Input() controls: any[];
  @Input() filters: BehaviorSubject<any>
  @ViewChild('f', {static: true}) form: NgForm;
  constructor() { 

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.form.valueChanges
    .pipe(
      debounceTime(1000),
      map((value)=>{
        return {...value, lastMod: Date.now()};
      })
    )
    .subscribe((value)=> {
      console.log(value)
      this.filters.next({
        ...this.filters.value,
        ...value
      })
    })
    console.log(this.form)
  }

}
