import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) {

   }
   public getBooks(){
        return this.http.get(environment.apiPath+"volumes?q=kaplan%20test%20prep");
   }
}
