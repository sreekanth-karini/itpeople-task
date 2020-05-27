import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

	API_URL:string = 'https://jsonplaceholder.typicode.com';
  
  constructor(private http: HttpClient) { }

  //API call to fetch posts list
  getPosts(){
  	return this.http.get(`${this.API_URL}/${'posts'}`);
  }
}
