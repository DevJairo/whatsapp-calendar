import { TestBed } from '@angular/core/testing';

import { CustomersManagerService } from './customers-manager.service';

describe('CustomersManagerService', () => {
  let service: CustomersManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
