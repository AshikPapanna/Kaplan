import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { BookFilterPipe } from 'src/app/shared/pipes/book-filter.pipe';
import { getCount } from '../../book-store/selectors';
import { BookCardComponent } from '../book-card/book-card.component';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  const initialState = {books: [],
    count:0 };
  let store: MockStore;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListComponent,BookFilterPipe,BookCardComponent ],
      providers:[
        provideMockStore({ initialState,
          selectors: [
            {
              selector: getCount,
              value: {
                bookFeatureKey: {
                count:100,
                books:[
                {
                  id: 'mockedId',
                  volumeInfo: {
                    title: 'Mocked Title',
                    authors: ['Mocked Author'],
                  },
                },
              ],
         }} },
          ], }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should test an input observable', fakeAsync(() => {
    let testbooks=[{ 
      "kind": "books#volume",
      "id": "hRDADwAAQBAJ",
      "etag": "t7Czb+rUuEc"}]
   //   component.books.and.returnValue(of(testbooks));
    component.books=of(testbooks);
    component.ngOnInit();
    tick();
    expect(component.allBooks).toEqual(testbooks);
  }));
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
