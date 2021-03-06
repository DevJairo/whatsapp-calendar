import { Component, OnInit } from '@angular/core';

// Models
import { ICustomer, ICustomerData } from '../../models/customer.interface';

// Services
import { CustomersManagerService } from '../../services/customers-manager.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {
  customerList$ = new BehaviorSubject<ICustomer[]>([]);
  viewItem: string
 
  constructor(private customersManagerService: CustomersManagerService) {
    customersManagerService.customers.subscribe((customers: ICustomer[]) => {
      this.customerList$.next(customers);
    });
    console.log(this.customerList$)
   }

   deleteCustomer (customerId: string) {
    this.customersManagerService.removeCustomer(customerId);
   }
   view(i: string){
     this.viewItem = i
   }

  ngOnInit(): void {
  }

}
