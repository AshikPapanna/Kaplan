import { Component, HostListener, OnInit, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BookActions from './book-store/actions'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @ViewChildren("drawer") drawer:any;
  constructor(private store: Store) { }
 
  ngOnInit(): void {
    this.store.dispatch(BookActions.getBooks())
  }

}
