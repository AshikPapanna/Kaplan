import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core'
import { Store } from '@ngrx/store'
import { addFavorite, removeFavorite } from '../../book-store/actions'

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit, OnChanges {
  volumeInfo: any
  salesInfo: any
  @Input() book: any
  displayEnableMore = false

  constructor(private store: Store) {}

  ngOnInit(): void {}
  ngOnChanges(simcha: SimpleChanges) {
    if (this.book) {
      if (this.book.volumeInfo) {
        this.volumeInfo = this.book.volumeInfo
      } else {
        this.volumeInfo = {}
      }
      if (this.book.salesInfo) {
        this.salesInfo = this.book.salesInfo
      } else {
        this.salesInfo = {}
      }
    }
  }
  public toggleFavorite(t: any, b: any) {
  if (t.checked) {
      this.store.dispatch(addFavorite({ book: b }))
    } else {
      this.store.dispatch(removeFavorite({ book: b }))
    }
  }
  public getShortDescription(desc: string) {
    if (desc.length > 250) {
      this.displayEnableMore = true
      desc = desc.slice(0, 250)
    }
    return desc
  }
}
