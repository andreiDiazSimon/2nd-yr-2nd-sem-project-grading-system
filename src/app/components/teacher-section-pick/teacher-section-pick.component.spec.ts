import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSectionPickComponent } from './teacher-section-pick.component';

describe('TeacherSectionPickComponent', () => {
  let component: TeacherSectionPickComponent;
  let fixture: ComponentFixture<TeacherSectionPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherSectionPickComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherSectionPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
