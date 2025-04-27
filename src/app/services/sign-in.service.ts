import { SignInResponse } from '../Interfaces/sign-in-response.interface';
import { SignInRequest } from '../Interfaces/sign-in-request.interface';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  signIn(
    apiUrl: string,
    payload: SignInRequest,
    options: { headers: HttpHeaders },
  ) {
    this.http.post<SignInResponse>(apiUrl, payload, options).subscribe({
      next: (response) => {
        console.log('Success:', response);

        if (response.success) {
          if (response.role === 'admin') {
            this.router.navigate(['/admin']);
          } else if (response.role === 'student') {
            this.router.navigate(['/student']);
          } else if (response.role === 'teacher') {
            this.router.navigate(['/teacher']);
          } else {
            alert('Unknown role');
          }
        } else {
          alert('Invalid Credentials');
        }
      },
      error: (err) => console.error('Error', err),
    });
  }
}
