import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BooksComponent } from './books.component'
import { BookListComponent } from './components/book-list/book-list.component'
import { AllBooksComponent } from './containers/all-books/all-books.component'
import { DetailsComponent } from './containers/details/details.component'
import { FavoriteBooksComponent } from './containers/favorite-books/favorite-books.component'

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: 'all',
        component: AllBooksComponent,
      },
      {
        path:':id/details',
        component:DetailsComponent
      },
      {
        path:'favorite',
        component:FavoriteBooksComponent
      }
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
