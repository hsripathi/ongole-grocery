import { OgCategoryGridModule } from './og-category-grid.module';

describe('OgCategoryGridModule', () => {
  let ogCategoryGridModule: OgCategoryGridModule;

  beforeEach(() => {
    ogCategoryGridModule = new OgCategoryGridModule();
  });

  it('should create an instance', () => {
    expect(ogCategoryGridModule).toBeTruthy();
  });
});
