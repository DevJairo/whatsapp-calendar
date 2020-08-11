import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models
import {ICustomer } from '../models/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersManagerService {
  customersCollection: AngularFirestoreCollection;
  customers: Observable<ICustomer[]>;

  constructor(private fireStore: AngularFirestore) {
    this.customersCollection = fireStore.collection('customers');
    this.customers = this.customersCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map (a => {
          const data = a.payload.doc.data() as ICustomer;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }
    ));
   }

  getCustomers(){
  return this.customers;
  }

  getCustomer(id:string){
    return this.customersCollection.doc<ICustomer>(id).valueChanges();
  }

  updateCustomer(customer: ICustomer, id: string){
    return this.customersCollection.doc(id).update(customer);
  }

  removeCustomer(id: string){
    return this.customersCollection.doc(id).delete();
  }

  addNewCustomer(customer: ICustomer){
    return this.customersCollection.add(customer).then( (docRef) => {
      let completeCustomer: ICustomer = {
        ...customer, id: docRef.id
      };
      this.updateCustomer(completeCustomer, docRef.id);
  });
  }
 
}