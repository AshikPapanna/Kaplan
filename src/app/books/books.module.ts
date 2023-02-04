import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'


import { BooksRoutingModule } from './books-routing.module'
import { BooksComponent } from './books.component'
import { BookListComponent } from './components/book-list/book-list.component'
import { SharedModule } from '../shared/shared.module'
import { StoreModule } from '@ngrx/store'
import { bookFeatureKey, bookReducer } from './book-store/reducer'
import { EffectsModule } from '@ngrx/effects'
import { BooksEffects } from './book-store/effects';
import { BookCardComponent } from './components/book-card/book-card.component';
import { DetailsComponent } from './containers/details/details.component';
import { AllBooksComponent } from './containers/all-books/all-books.component';
import { FavoriteBooksComponent } from './containers/favorite-books/favorite-books.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookCardComponent, DetailsComponent, AllBooksComponent, FavoriteBooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forFeature(bookFeatureKey, bookReducer),
    EffectsModule.forFeature([BooksEffects])
  ],
})
export class BooksModule {}
