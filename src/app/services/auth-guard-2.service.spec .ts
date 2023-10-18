import { TestBed } from '@angular/core/testing';

import { AuthGuardService2 } from './auth-guard-2.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
