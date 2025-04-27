import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionPickComponent } from './admin-section-pick.component';

describe('AdminSectionPickComponent', () => {
  let component: AdminSectionPickComponent;
  let fixture: ComponentFixture<AdminSectionPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSectionPickComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSectionPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
