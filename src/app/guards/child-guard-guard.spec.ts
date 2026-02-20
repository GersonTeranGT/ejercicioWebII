import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { childGuardGuard } from './child-guard-guard';

describe('childGuardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => childGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
