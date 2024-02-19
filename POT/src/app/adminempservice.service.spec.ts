import { TestBed } from '@angular/core/testing';

import { AdminempserviceService } from './adminempservice.service';

describe('AdminempserviceService', () => {
  let service: AdminempserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminempserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
