import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgCategoryGridComponent } from './og-category-grid.component';

describe('OgCategoryGridComponent', () => {
  let component: OgCategoryGridComponent;
  let fixture: ComponentFixture<OgCategoryGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgCategoryGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgCategoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
