import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { BookCardComponent } from './book-card.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { cold } from 'jasmine-marbles';
import { By } from '@angular/platform-browser';
import { getFavoriteCount, selectFavoriteBooks } from '../../book-store/selectors';
import { SimpleChange } from '@angular/core';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;
  let store: MockStore;
  const initialState ={bookFeatureKey:{
    count:100,
   books: [
    {
      id: 'mockedId',
      volumeInfo: {
        title: 'Mocked Title',
        authors: ['Mocked Author'],
        description:"description",
        imageLinks: {
          "smallThumbnail": "http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      },
      salesInfo: {
        title: 'sale Title',
       
      },
    },    
    {
      id: 'mockedId1',
      volumeInfo: {
        title: 'favorite Title',
        authors: ['favorite Author'],
        description:"description",
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
      declarations: [ BookCardComponent ],
      imports:[MatSlideToggleModule,MatCardModule],
      providers:[
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    component.book=  {
      "kind": "books#volume",
      "id": "hRDADwAAQBAJ",
      "etag": "t7Czb+rUuEc",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/hRDADwAAQBAJ",
      "volumeInfo": {
          "title": "Official Guide to OET",
          "authors": [
              "Kaplan Test Prep"
          ],
          "publisher": "Simon and Schuster",
          "publishedDate": "2020-03-03",
          "description": "The Official Guide to OET is the first guide book endorsed by the test maker (CBLA) and is designed to prepare students for the updated OET exam. Kaplan Test Prep, the world leader in test preparation since 1938, has authored this book incorporating key test-taking tips and strategies. The practice questions have been reviewed by CBLA to ensure they are true to the test. Get familiar with the exam to help you face the OET with confidence. Test-like Listening tracks, realistic practice questions, and additional online resources give you everything you need to succeed on the OET. This book is suitable for both self-study and classroom use. To access your audio and online resources, first register online at kaptest.com/booksonline. Once you’ve registered, access your audio and resources at kaptest.com/login or download the Kaplan Mobile Prep app on Google Play or the App Store for your Android or iOS device Tips and Practice 1 full practice test Online audio for Listening content Skill-boosting activities for each of the subtests (Listening, Reading, Writing & Speaking Self-study tips Test Day advice Expert Guidance We know the test: The Kaplan team in conjunction with CBLA ensure our practice questions and study materials are true to the test Kaplan's books and practice questions are written by experts who know students—every explanation is written to help you learn We invented test prep—Kaplan (www.kaptestglobal.com) has been helping students for 80 years, and our proven strategies have helped legions of students achieve their dreams",
          
          "readingModes": {
              "text": true,
              "image": false
          },
          "pageCount": 252,
          "printType": "BOOK",
          "categories": [
              "Foreign Language Study"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.3.3.0.preview.2",
          "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
          },
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.co.in/books?id=hRDADwAAQBAJ&pg=PP1&dq=kaplan+test+prep&hl=&cd=1&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=hRDADwAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=hRDADwAAQBAJ"
      },  
     
      
  },
  component.volumeInfo = component.book.volumeInfo
    fixture.detectChanges();
  });
  it('should get desc should be 250 character for greater length', () => {
    let desc='The Official Guide to OET is the first guide book endorsed by the test maker (CBLA) and is designed to prepare students for the updated OET exam. Kaplan Test Prep, the world leader in test preparation since 1938, has authored this book incorporating key test-taking tips and strategies. The practice questions have been reviewed by CBLA to ensure they are true to the test. Get familiar with the exam to help you face the OET with confidence. Test-like Listening tracks, realistic practice questions, and additional online resources give you everything you need to succeed on the OET. This book is suitable for both self-study and classroom use. To access your audio and online resources, first register online at kaptest.com/booksonline. Once you’ve registered, access your audio and resources at kaptest.com/login or download the Kaplan Mobile Prep app on Google Play or the App Store for your Android or iOS device Tips and Practice 1 full practice test Online audio for Listening content Skill-boosting activities for each of the subtests (Listening, Reading, Writing & Speaking Self-study tips Test Day advice Expert Guidance We know the test: The Kaplan team in conjunction with CBLA ensure our practice questions and study materials are true to the test Kaplan"s books and practice questions are written by experts who know students—every explanation is written to help you learn We invented test prep—Kaplan (www.kaptestglobal.com) has been helping students for 80 years, and our proven strategies have helped legions of students achieve their dreams';
    let shortDesc= component.getShortDescription(desc);
    expect(shortDesc.length).toBe(250);
  });
  it('should get desc  be equal to character if length less than 250', () => {
    let desc='The Official Guide to OET is';
    let shortDesc= component.getShortDescription(desc);
    expect(shortDesc.length).toBe(desc.length);
  });

  it('should check volume info', () => {
    component.book=initialState.bookFeatureKey.books[0];
    component.ngOnChanges( {
      name: new SimpleChange(null,initialState.bookFeatureKey.books[0],false)
    });
    fixture.detectChanges();
    expect(component.volumeInfo).toEqual(initialState.bookFeatureKey.books[0].volumeInfo);
  });

  it('should check sales info', fakeAsync(() => {

    component.book=initialState.bookFeatureKey.books[0];
    component.ngOnChanges( {
      name: new SimpleChange(null,initialState.bookFeatureKey.books[0],false)
    });
   
    fixture.detectChanges();
    expect(component.salesInfo).toEqual( {
      title: 'sale Title',
     
    });
  }));
  it('should check toggle', () => {
    component.ngOnInit();
    let element=fixture.debugElement.query(By.directive(MatSlideToggle));
    console.log(element);
    spyOn(component,'toggleFavorite');
    element.triggerEventHandler('change', {checked:true,book:{
      id: 'mockedId',
      volumeInfo: {
        title: 'Mocked Title',
        authors: ['Mocked Author'],
        description: "The Official Guide to OET is the first guide book endorsed by the test maker (CBLA) and is designed to prepare students for the updated OET exam. Kaplan Test Prep, the world leader in test preparation since 1938, has authored this book incorporating key test-taking tips and strategies. The practice questions have been reviewed by CBLA to ensure they are true to the test. Get familiar with the exam to help you face the OET with confidence. Test-like Listening tracks, realistic practice questions, and additional online resources give you everything you need to succeed on the OET. This book is suitable for both self-study and classroom use. To access your audio and online resources, first register online at kaptest.com/booksonline. Once you’ve registered, access your audio and resources at kaptest.com/login or download the Kaplan Mobile Prep app on Google Play or the App Store for your Android or iOS device Tips and Practice 1 full practice test Online audio for Listening content Skill-boosting activities for each of the subtests (Listening, Reading, Writing & Speaking Self-study tips Test Day advice Expert Guidance We know the test: The Kaplan team in conjunction with CBLA ensure our practice questions and study materials are true to the test Kaplan's books and practice questions are written by experts who know students—every explanation is written to help you learn We invented test prep—Kaplan (www.kaptestglobal.com) has been helping students for 80 years, and our proven strategies have helped legions of students achieve their dreams",

      },
      salesInfo: {
        title: 'sale Title',
       
      },
      imageLinks: {
        "smallThumbnail": "http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    }});
    //element.change('change',)
    //console.log(element);
    expect(component.toggleFavorite).toHaveBeenCalled();
    // store.select(getFavoriteCount).subscribe(x=>{
    //   x.toBe(2);
    // })
  });
  it('should check add favorite ', () => {
    component.ngOnInit();
    let element=fixture.debugElement.query(By.directive(MatSlideToggle));
    console.log(element);
    //spyOn(component,'toggleFavorite');
    element.triggerEventHandler('change',{checked:true});
    fixture.detectChanges();
    //expect(component.test).toBe("sdasd");
    store.select(getFavoriteCount).subscribe(x=>{
     expect(x).toBe(1);
    })
  });
  it('should check remove favorite ', () => {
    component.ngOnInit();
    let element=fixture.debugElement.query(By.directive(MatSlideToggle));
    console.log(element);
    //spyOn(component,'toggleFavorite');
    element.triggerEventHandler('change',{checked:false});
    fixture.detectChanges();
    //expect(component.test).toBe("sdasd");
    store.select(getFavoriteCount).subscribe(x=>{
     expect(x).toBe(1);
    })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
