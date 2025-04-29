import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentGrades } from '../Interfaces/student-grade.interface';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  private api = 'http://localhost:5085/api/teacher/';

  constructor(private http: HttpClient) {}

  getAllSections(): Observable<string[]> {
    return this.http.get<string[]>(`${this.api}get-all-sections`);
  }

  getStudentsAndGradesBySectionAndTeacher(section: string, teacherId: number) {
    return this.http.get<StudentGrades[]>(
      `${this.api}grades/section/${section}/teacher/${teacherId}`,
    );
  }
}
