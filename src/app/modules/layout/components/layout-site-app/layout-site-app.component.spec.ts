import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSiteAppComponent } from './layout-site-app.component';

describe('LayoutSiteAppComponent', () => {
  let component: LayoutSiteAppComponent;
  let fixture: ComponentFixture<LayoutSiteAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutSiteAppComponent]
    });
    fixture = TestBed.createComponent(LayoutSiteAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
