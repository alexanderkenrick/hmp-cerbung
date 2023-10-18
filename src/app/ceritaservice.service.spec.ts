import { TestBed } from '@angular/core/testing';

import { CeritaserviceService } from './ceritaservice.service';

describe('CeritaserviceService', () => {
  let service: CeritaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeritaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
