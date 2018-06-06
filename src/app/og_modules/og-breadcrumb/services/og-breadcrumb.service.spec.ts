import { TestBed, inject } from '@angular/core/testing';

import { OgBreadcrumbService } from './og-breadcrumb.service';

describe('OgBreadcrumbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OgBreadcrumbService]
    });
  });

  it('should be created', inject([OgBreadcrumbService], (service: OgBreadcrumbService) => {
    expect(service).toBeTruthy();
  }));
});
