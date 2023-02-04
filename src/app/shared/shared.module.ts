import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { BookFilterPipe } from './pipes/book-filter.pipe';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    HeaderComponent,
    BookFilterPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,    
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
     HeaderComponent,
     MatCardModule,
     MatSlideToggleModule,
     MatButtonModule,
    MatIconModule,
    BookFilterPipe,
    FormsModule

  ]
})
export class SharedModule { }
