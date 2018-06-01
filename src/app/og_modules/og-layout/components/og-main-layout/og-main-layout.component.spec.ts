import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgMainLayoutComponent } from './og-main-layout.component';

describe('OgMainLayoutComponent', () => {
  let component: OgMainLayoutComponent;
  let fixture: ComponentFixture<OgMainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgMainLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
