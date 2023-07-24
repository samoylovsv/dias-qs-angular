import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEntryPcComponent } from './layout-entry-pc.component';

describe('LayoutEntryPcComponent', () => {
  let component: LayoutEntryPcComponent;
  let fixture: ComponentFixture<LayoutEntryPcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutEntryPcComponent]
    });
    fixture = TestBed.createComponent(LayoutEntryPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
