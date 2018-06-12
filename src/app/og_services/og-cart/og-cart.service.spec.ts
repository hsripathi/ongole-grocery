import { TestBed, inject } from '@angular/core/testing';

import { OgCartService } from './og-cart.service';

describe('OgCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OgCartService]
    });
  });

  it('should be created', inject([OgCartService], (service: OgCartService) => {
    expect(service).toBeTruthy();
  }));
});
