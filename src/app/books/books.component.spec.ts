import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HeaderComponent } from '../shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let store: MockStore;
  const initialState = {books: [],
    count:0 };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksComponent,HeaderComponent ],
      imports:[RouterTestingModule],
      providers:[
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
