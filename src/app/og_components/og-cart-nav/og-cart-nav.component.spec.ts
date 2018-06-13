import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgCartNavComponent } from './og-cart-nav.component';

describe('OgCartNavComponent', () => {
  let component: OgCartNavComponent;
  let fixture: ComponentFixture<OgCartNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgCartNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgCartNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
