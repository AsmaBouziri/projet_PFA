import { TestBed } from '@angular/core/testing';

import { TypepretService } from './typepret.service';

describe('TypepretService', () => {
  let service: TypepretService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypepretService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
