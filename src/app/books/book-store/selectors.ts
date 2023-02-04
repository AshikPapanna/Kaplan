// import { createFeatureSelector, createSelector } from '@ngrx/store'

// export const featureKey = 'feature';
// export interface FeatureState {
//   books: any[]
// }
// export interface AppState {
//   featureState: FeatureState
// }
// export const selectFeature =createFeatureSelector<AppState,FeatureState>(featureKey);

// export const selectBooks = createSelector(
//   selectFeature,
//   (state: FeatureState) => state.books,
// )
import { createSelector, createFeatureSelector } from '@ngrx/store';
 import {bookFeatureKey} from '../book-store/reducer'

 
export interface BookFeatureState {
  books: any;
  count:number;
}
 
export interface AppState {
    bookFeatureKey: BookFeatureState;
}
 
export const selectFeature = createFeatureSelector<BookFeatureState>(bookFeatureKey);
 
export const selectBooks = createSelector(
  selectFeature,
  (state: BookFeatureState) => state.books
);
export const selectFavoriteBooks = createSelector(
  selectBooks,
  (books: any[]) => books.filter((x:any)=>x.isFavorite)
);
export const selectBookByID=createSelector(
  selectBooks,
  (books: any[],props: { id: any; })=> {return books.filter(x=>x.id==props.id)}
)
export const getCount=createSelector(
  selectFeature,
  (state: BookFeatureState) => state.count
)

export const getFavoriteCount=createSelector(
  selectFavoriteBooks,
  (state: any[]) => state.length
)