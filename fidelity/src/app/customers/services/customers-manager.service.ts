import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

// Models
import { ICustomer } from '../models/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersManagerService {
  customerList$ = new BehaviorSubject<Array<ICustomer>>([]);

  constructor(private fireStore: AngularFirestore) {
    fireStore
      .collection('customers')
      .valueChanges()
      .subscribe((customers: Array<ICustomer>) => {
        console.log(customers);
        this.customerList$.next(customers);
      });
   }

   addNewCustomer(newCustomer: ICustomer) {
    this.fireStore.collection('customers').add(newCustomer);
  }

  removeCustomer(indexPosition: string) {
    this.fireStore.collection('customers').doc(indexPosition).delete();
  }

  getCustomerByPosition(indexPosition: number) {
    return this.customerList$.getValue()[indexPosition];
  }

  getCustomerByName(name: string) {
    this.fireStore
      .collection('customers', (ref) => ref.where('name', '==', name + '\uf8ff'))
      .valueChanges()
      .subscribe((customers: ICustomer[]) => {
        this.customerList$.next(customers);
      });
  }
}