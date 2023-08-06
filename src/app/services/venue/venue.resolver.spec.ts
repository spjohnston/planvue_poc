import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { venueResolver } from './venue.resolver';

describe('venueResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => venueResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
