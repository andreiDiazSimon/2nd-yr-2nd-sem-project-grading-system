import { Student } from '../Interfaces/admin-student.interface';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminStudentService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:5085/api/admin/student';

  getAllStudents(): Observable<Student[]> {
    let url = `${this.url}/get-all-student`;
    return this.http.get<Student[]>(url);
  }

  removeStudent(studentId: number) {
    let url = `${this.url}/admin-remove-student`;
    return this.http.post(url, {
      id: studentId,
    });
  }
}
