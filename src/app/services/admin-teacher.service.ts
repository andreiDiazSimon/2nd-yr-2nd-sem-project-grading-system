import { Teacher } from '../Interfaces/admin-teacher.interface';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminTeacherService {

  constructor(private http: HttpClient) { }

getAllTeachers() {
  let url = "http://localhost:5085/api/admin/teacher/get-all-teacher"
  return this.http.get<Teacher[]>(url);
}
}
