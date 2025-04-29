import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private api = 'http://localhost:5085/api/student/';

  constructor(private http: HttpClient) {}
}
