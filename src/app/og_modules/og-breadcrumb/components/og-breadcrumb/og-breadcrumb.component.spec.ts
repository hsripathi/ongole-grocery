import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgBreadcrumbComponent } from './og-breadcrumb.component';

describe('OgBreadcrumbComponent', () => {
  let component: OgBreadcrumbComponent;
  let fixture: ComponentFixture<OgBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
