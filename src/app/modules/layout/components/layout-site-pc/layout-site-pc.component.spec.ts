import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSitePcComponent } from './layout-site-pc.component';

describe('LayoutSitePcComponent', () => {
  let component: LayoutSitePcComponent;
  let fixture: ComponentFixture<LayoutSitePcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutSitePcComponent]
    });
    fixture = TestBed.createComponent(LayoutSitePcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
