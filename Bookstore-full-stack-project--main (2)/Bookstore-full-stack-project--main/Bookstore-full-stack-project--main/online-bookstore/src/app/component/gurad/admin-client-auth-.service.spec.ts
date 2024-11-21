import { TestBed } from '@angular/core/testing';

import { AdminClientAuthService } from './admin-client-auth-.service';

describe('AdminClientAuthService', () => {
  let service: AdminClientAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminClientAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
