import { TestBed } from '@angular/core/testing';

import { Guardian2Guard } from './guardian2.guard';

describe('Guardian2Guard', () => {
  let guard: Guardian2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Guardian2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
