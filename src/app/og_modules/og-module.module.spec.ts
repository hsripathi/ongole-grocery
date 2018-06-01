import { OgModuleModule } from './og-module.module';

describe('OgModuleModule', () => {
  let ogModuleModule: OgModuleModule;

  beforeEach(() => {
    ogModuleModule = new OgModuleModule();
  });

  it('should create an instance', () => {
    expect(ogModuleModule).toBeTruthy();
  });
});
