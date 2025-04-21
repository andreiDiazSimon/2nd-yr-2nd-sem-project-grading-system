import { TestBed } from '@angular/core/testing';

import { AdminTeacherService } from './admin-teacher.service';

describe('AdminTeacherService', () => {
  let service: AdminTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
