import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEntryAppComponent } from './layout-entry-app.component';

describe('LayoutEntryAppComponent', () => {
  let component: LayoutEntryAppComponent;
  let fixture: ComponentFixture<LayoutEntryAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutEntryAppComponent]
    });
    fixture = TestBed.createComponent(LayoutEntryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
