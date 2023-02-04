import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () =>
      import('./books/books.module').then((m) => m.BooksModule),
  },
  {
    path: '',
    redirectTo: 'books/all',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'books/all',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
