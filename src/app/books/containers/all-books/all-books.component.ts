import { Component, OnInit,OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {selectBooks, AppState, getCount}from '../../book-store/selectors'


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit,OnDestroy {

  constructor(private store: Store) { }
  ngOnDestroy(): void {
     this.getCountSubscription$.unsubscribe();
  }
  allBooks :any;
  count:number=0;
  getCountSubscription$:any;
  ngOnInit(): void {
  
    this.allBooks=  this.store.select(selectBooks);
    this.getCountSubscription$=this.store.select(getCount).subscribe(x=>{
      this.count=x;
    })
  }


}
