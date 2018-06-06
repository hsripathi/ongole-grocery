import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgCategoryDetailsComponent } from './og-category-details.component';

describe('OgCategoryDetailsComponent', () => {
  let component: OgCategoryDetailsComponent;
  let fixture: ComponentFixture<OgCategoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgCategoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
