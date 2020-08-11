import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, filter, take } from 'rxjs/operators';

// Services
import { CustomersManagerService } from '../../services/customers-manager.service';

// Models
import { ICustomer, ICustomerData } from '../../models/customer.interface';


@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})

export class FormClientComponent implements OnInit {
  // customer: ICustomer;
  isNewCustomer: boolean = true;
  customer: ICustomer = {
    name: "",
    phone: "",
    estado: "",
    id: ""
  };
  messageId = null;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private customersManagerService: CustomersManagerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.customer.id = this.route.snapshot.paramMap.get('id');
    if (this.customer.id) { // Load customer
      console.log(this.customer.id);
      this.customersManagerService.getCustomer(this.customer.id).subscribe((data: ICustomer) => {
        this.customer = {id: this.customer.id, ...data};
      });
      this.isNewCustomer = false;
    }
  }

  onSubmit() {
    if(this.isNewCustomer){
      const newCustomer: ICustomer = {
        name: this.customer.name,
        phone: this.customer.phone,
        estado: 'cliente exporadico'
      };
      this.customersManagerService.addNewCustomer(newCustomer);
    } else {
      this.customersManagerService.updateCustomer(this.customer, this.customer.id);

    }
    
    this.router.navigate(['customers']);
  }
}
