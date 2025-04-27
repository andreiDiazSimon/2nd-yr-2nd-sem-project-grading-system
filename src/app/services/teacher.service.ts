import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentGrades } from '../Interfaces/student-grade.interface';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  private api = 'http://localhost:5085/api/teacher/';

  constructor(private http: HttpClient) {}

  getSections(): Observable<string[]> {
    return this.http.get<string[]>(`${this.api}sections`);
  }

  getGrades(section: string): Observable<StudentGrades[]> {
    return this.http.get<StudentGrades[]>(`${this.api}grades/${section}`);
  }

  saveGrades(payload: any) {
    return this.http.post(`${this.api}save-grades`, payload);
  }
}
