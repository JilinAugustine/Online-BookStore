import { TestBed } from '@angular/core/testing';

import { ClientLoginGuardService } from './client-login-guard.service';

describe('ClientLoginGuardService', () => {
  let service: ClientLoginGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientLoginGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
