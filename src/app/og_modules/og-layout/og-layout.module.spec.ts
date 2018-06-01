import { OgLayoutModule } from './og-layout.module';

describe('OgLayoutModule', () => {
  let ogLayoutModule: OgLayoutModule;

  beforeEach(() => {
    ogLayoutModule = new OgLayoutModule();
  });

  it('should create an instance', () => {
    expect(ogLayoutModule).toBeTruthy();
  });
});
