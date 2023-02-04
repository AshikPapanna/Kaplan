import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {selectFavoriteBooks,getFavoriteCount}from '../../book-store/selectors'

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.component.html',
  styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent implements OnInit,OnDestroy {

  constructor(private store: Store) { }
  favoriteBooks:any;
  count:number=0;
  getCountSubscription$:any;
  ngOnDestroy(): void {
    this.getCountSubscription$.unsubscribe();
 }
  ngOnInit(): void {
    this.favoriteBooks=  this.store.select(selectFavoriteBooks);
    this.getCountSubscription$=this.store.select(getFavoriteCount).subscribe(x=>{
      this.count=x;
    })
  }

}
