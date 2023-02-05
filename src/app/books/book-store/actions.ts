import {createAction, props} from '@ngrx/store';

export const getBooks=createAction('[books] get books..')

export const addBooks=createAction("[books] add books..",props<{books:any}>())

export const addFavorite=createAction("[books] add favorite books..",props<{book:any}>())

export const addTotal=createAction("[books]  total count..",props<{count:number}>())

export const removeFavorite=createAction("[books] remove favorite books..",props<{book:any}>())

export const addError=createAction("[books] Add error.",props<{message:string ,status:number}>())
export const removeError=createAction("[books] remove error.");

