import { Student } from '../Interfaces/admin-student.interface';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminSectionService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:5085/api/admin/section/';

  getAllSections(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}get-all-section`);
  }

  getStudentsBySection(section: string): Observable<Student[]> {
    return this.http.get<Student[]>(
      `${this.apiUrl}get-students-by-section/${section}`,
    );
  }
}
