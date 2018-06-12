import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgProductComponent } from './og-product.component';

describe('OgProductComponent', () => {
  let component: OgProductComponent;
  let fixture: ComponentFixture<OgProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
