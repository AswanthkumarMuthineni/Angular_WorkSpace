import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlogComponent } from './adminlog.component';

describe('AdminlogComponent', () => {
  let component: AdminlogComponent;
  let fixture: ComponentFixture<AdminlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminlogComponent]
    });
    fixture = TestBed.createComponent(AdminlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
