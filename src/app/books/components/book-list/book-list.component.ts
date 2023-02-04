
import { Component, Input, OnDestroy, OnInit } from '@angular/core'




@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit,OnDestroy {
  allBooks: any[] = []
  @Input() books:any ;
  @Input() count:number=0;
  filterargs:any=null;
  booksSubscription$:any ;
  constructor() {
    
  }
  ngOnDestroy(): void {
    this.booksSubscription$.unsubscribe()
  }

  ngOnInit(): void {
    
    this.booksSubscription$ = this.books.subscribe((x:any)=>this.allBooks=x);
  }

}
