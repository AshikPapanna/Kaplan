import { Component, HostListener, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import * as BookActions from './book-store/actions'
import { getErrorMessage } from './book-store/selectors';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit,OnDestroy {
  
  constructor(private store: Store) { }
  ngOnDestroy(): void {
    // if(this.errorMessage$)this.errorMessage$.unsubscribe();
    // if(this.refSub$)this.refSub$.unsubscribe();
  }
  errorMessage$:any;
  refSub$:any;
  ref!:MatSnackBarRef<any>;
  ngOnInit(): void {
    this.store.dispatch(BookActions.getBooks());
    // this.errorMessage$=this.store.select(getErrorMessage).subscribe(x=>{
    //   if(x.length){
    //     let message=x.join(",");
    //   //   if(this._snackBar){
    //   //   this.ref= this._snackBar.open(message, "Close");
    //   //   this.refSub$ =this.ref.afterDismissed().subscribe (x=>{
    //   //       this.store.dispatch(BookActions.removeError());
    //   //   })
    //   // }
    // }
   //});
  }

}
