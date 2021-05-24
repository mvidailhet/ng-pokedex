import { TestBed } from '@angular/core/testing';

import { PreventPokemonFormLeaveGuard } from './prevent-pokemon-form-leave.guard';

describe('PreventPokemonFormLeaveGuard', () => {
  let guard: PreventPokemonFormLeaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventPokemonFormLeaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
