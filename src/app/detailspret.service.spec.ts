import { TestBed } from '@angular/core/testing';

import { DetailspretService } from './detailspret.service';

describe('DetailspretService', () => {
  let service: DetailspretService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailspretService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
