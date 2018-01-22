import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  // instantiate posts to an empty array
  customers: any = [];

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.customersService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }
}
