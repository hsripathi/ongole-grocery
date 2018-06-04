import { TestBed, inject } from '@angular/core/testing';

import { OgGroceryService } from './og-grocery.service';

describe('OgGroceryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OgGroceryService]
    });
  });

  it('should be created', inject([OgGroceryService], (service: OgGroceryService) => {
    expect(service).toBeTruthy();
  }));
});
