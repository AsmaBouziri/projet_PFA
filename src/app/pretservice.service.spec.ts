import { TestBed } from '@angular/core/testing';

import { PretserviceService } from './pretservice.service';

describe('PretserviceService', () => {
  let service: PretserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PretserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
