import { OgBreadcrumbModule } from './og-breadcrumb.module';

describe('OgBreadcrumbModule', () => {
  let ogBreadcrumbModule: OgBreadcrumbModule;

  beforeEach(() => {
    ogBreadcrumbModule = new OgBreadcrumbModule();
  });

  it('should create an instance', () => {
    expect(ogBreadcrumbModule).toBeTruthy();
  });
});
