import { Action, createReducer, on } from '@ngrx/store'

import * as BooksAction from './actions'
export const bookFeatureKey = 'bookFeatureKey'

export interface State {
  books: any[],
  count:number
 
}
export const initialState: State = {
  books: [],
  count:0

}
export const bookReducer = createReducer(
  initialState,
  on(BooksAction.addBooks, (state, { books }) => ({
    ...state,
    books: books.map((x: any) => ({ ...x, isFavorite: false })),
  })),
  on(BooksAction.addTotal, (state, { count }) => ({
    ...state,
    count: count,
  })),
  // on(BooksAction.addFavorite,(state,{book})=>({...state,isFavorite: true})),
  // on(BooksAction.removeFavorite,(state,{book})=>({...state,isFavorite: false})),
  on(BooksAction.addFavorite, (state, { book }) => ({
    ...state,
    books: state.books.map((x) => {
      if (x.id == book.id) {
        return { ...x, isFavorite : true}
      }
      return x
    }),
  })),
  on(BooksAction.removeFavorite, (state, { book }) => ({
    ...state,
    books: state.books.map((x) => {
      if (x.id == book.id) {
        return { ...x, isFavorite : false}
      }
      return x
    }),
  })),
)
