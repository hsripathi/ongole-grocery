import { OgCartModule } from './og-cart.module';

describe('OgCartModule', () => {
  let ogCartModule: OgCartModule;

  beforeEach(() => {
    ogCartModule = new OgCartModule();
  });

  it('should create an instance', () => {
    expect(ogCartModule).toBeTruthy();
  });
});
