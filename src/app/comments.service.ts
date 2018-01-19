import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommentsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllComments() {
    return this.http.get('/api/comments')
      .map(res => res.json());
  }

}
