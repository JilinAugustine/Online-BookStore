import { TestBed } from '@angular/core/testing';

import { AdminClientAuthGuradService } from './admin-client-auth-gurad.service';

describe('AdminClientAuthGuradService', () => {
  let service: AdminClientAuthGuradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminClientAuthGuradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
