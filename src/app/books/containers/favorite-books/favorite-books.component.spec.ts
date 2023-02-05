import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { FavoriteBooksComponent } from './favorite-books.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { BookListComponent } from '../../components/book-list/book-list.component';
import { BookFilterPipe } from 'src/app/shared/pipes/book-filter.pipe';
import { BookCardComponent } from '../../components/book-card/book-card.component';
describe('FavoriteBooksComponent', () => {
  let component: FavoriteBooksComponent;
  let fixture: ComponentFixture<FavoriteBooksComponent>;
  let store: MockStore;
  const initialState ={bookFeatureKey:{
    count:100,
  books: [
    {
      id: 'mockedId',
      volumeInfo: {
        title: 'Mocked Title',
        authors: ['Mocked Author'],
        description: "The Official ",

        imageLinks: {
          "smallThumbnail": "http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      },
      isFavorite:true
     
    },
    {
      id: 'mockedId1',
      volumeInfo: {
        title: 'favorite Title',
        authors: ['favorite Author'],
        description: "The Official Guide to OET is the first guide book endorsed by the test maker (CBLA) and is designed to prepare students for the updated OET exam. Kaplan Test Prep, the world leader in test preparation since 1938, has authored this book incorporating key test-taking tips and strategies. The practice questions have been reviewed by CBLA to ensure they are true to the test. Get familiar with the exam to help you face the OET with confidence. Test-like Listening tracks, realistic practice questions, and additional online resources give you everything you need to succeed on the OET. This book is suitable for both self-study and classroom use. To access your audio and online resources, first register online at kaptest.com/booksonline. Once you’ve registered, access your audio and resources at kaptest.com/login or download the Kaplan Mobile Prep app on Google Play or the App Store for your Android or iOS device Tips and Practice 1 full practice test Online audio for Listening content Skill-boosting activities for each of the subtests (Listening, Reading, Writing & Speaking Self-study tips Test Day advice Expert Guidance We know the test: The Kaplan team in conjunction with CBLA ensure our practice questions and study materials are true to the test Kaplan's books and practice questions are written by experts who know students—every explanation is written to help you learn We invented test prep—Kaplan (www.kaptestglobal.com) has been helping students for 80 years, and our proven strategies have helped legions of students achieve their dreams",

        imageLinks: {
          "smallThumbnail": "http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      },
     
      isFavorite:true
    },
  ],
},
};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteBooksComponent,BookListComponent,BookFilterPipe,BookCardComponent ],
      imports:[],
      providers:[
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get favorite count', () => {
   component.ngOnInit();
   expect(component.count).toBe(2);
    
  });

  it('should check favorite book', fakeAsync(() => {
    component.ngOnInit();
    tick();
    component.favoriteBooks.subscribe((x:any)=>{
      expect(x[0]).toEqual( initialState.bookFeatureKey.books[0]);
    })
   
     
   }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
