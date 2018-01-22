import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CustomersService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllCustomers() {
    return this.http.get('/api/customers')
      .map(res => res.json());
  }

}
