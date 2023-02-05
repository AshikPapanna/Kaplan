import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { selectBookByID } from '../../book-store/selectors'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit,OnDestroy {
   bookDetailsSubscription:any;
  constructor(private route: ActivatedRoute, private store: Store) {
    this.routeSubscription = this.route.paramMap.subscribe((x: any) => {
      //console.log(x.params)
      this.bookDetails$ = this.store.select(selectBookByID, { id: x.params["id"] })
    })
  }
  ngOnDestroy(): void {
     if(this.routeSubscription)this.routeSubscription.unsubscribe();
     if(this.bookDetailsSubscription) this.bookDetailsSubscription.unsubscribe();
  }
  routeSubscription: any
  bookDetails$: any
  details: any
  ngOnInit(): void {
   this.bookDetailsSubscription= this.bookDetails$.subscribe((book: any) => {
      this.details = book
    })
  }
}
