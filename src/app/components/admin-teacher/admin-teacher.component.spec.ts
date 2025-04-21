import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherComponent } from './admin-teacher.component';

describe('AdminTeacherComponent', () => {
  let component: AdminTeacherComponent;
  let fixture: ComponentFixture<AdminTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
