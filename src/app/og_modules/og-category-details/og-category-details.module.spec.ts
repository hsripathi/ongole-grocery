import { OgCategoryDetailsModule } from './og-category-details.module';

describe('OgCategoryDetailsModule', () => {
  let ogCategoryDetailsModule: OgCategoryDetailsModule;

  beforeEach(() => {
    ogCategoryDetailsModule = new OgCategoryDetailsModule();
  });

  it('should create an instance', () => {
    expect(ogCategoryDetailsModule).toBeTruthy();
  });
});
