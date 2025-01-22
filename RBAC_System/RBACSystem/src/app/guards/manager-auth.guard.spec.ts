import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { managerAuthGuard } from './manager-auth.guard';

describe('managerAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => managerAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
