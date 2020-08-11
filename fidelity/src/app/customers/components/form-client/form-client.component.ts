import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { CustomersManagerService } from '../../services/customers-manager.service';

// Models
import { ICustomer } from '../../models/customer.interface';


@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  name: string;
  phone: string;
  estado: string;
  loading: boolean = false;

  constructor(private customersManagerService: CustomersManagerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newIndex = this.customersManagerService.customerList$.getValue().length;

    const newCustomer: ICustomer = {
      name: this.name,
      phone: this.phone,
      estado: 'cliente exporadico',
      id: newIndex,
    };
    console.log({newCustomer});
    this.customersManagerService.addNewCustomer(newCustomer);
    this.router.navigate(['customers']);
  }
}
