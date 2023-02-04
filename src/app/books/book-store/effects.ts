import { Injectable } from '@angular/core'

import { Actions, createEffect, ofType } from '@ngrx/effects'
import { BooksService } from '../books.service'
import * as BookActions from '../book-store/actions'
import { catchError, EMPTY, exhaustMap, map, of, switchMap } from 'rxjs'

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.getBooks),
      exhaustMap(() =>
        this.bookService.getBooks().pipe(
          switchMap((res: any) =>( [BookActions.addBooks({ books: res.items }),BookActions.addTotal({ count: +res.totalItems })])),
          catchError((error) => EMPTY),
        ),
      ),
    ),
  )
  
  constructor(private actions$: Actions, private bookService: BooksService) {}
}
