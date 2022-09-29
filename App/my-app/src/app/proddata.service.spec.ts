import { TestBed } from '@angular/core/testing';

import { ProddataService } from './proddata.service';

describe('ProddataService', () => {
  let service: ProddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
