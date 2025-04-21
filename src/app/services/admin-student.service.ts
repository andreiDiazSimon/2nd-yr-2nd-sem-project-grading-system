import { Student } from '../Interfaces/admin-student.interface';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AdminStudentService {
  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    let url = 'http://localhost:5085/api/admin/student/get-all-student';
    return this.http.get<Student[]>(url);
  }

removeStudent(studentId: number) {
  return this.http.post('http://localhost:5085/api/admin/student/admin-remove-student', {
    id: studentId,
  });
}
}
