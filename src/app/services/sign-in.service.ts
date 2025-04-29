import { SignInResponse } from '../Interfaces/sign-in-response.interface';
import { SignInRequest } from '../Interfaces/sign-in-request.interface';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private usernameSubject = new BehaviorSubject<string | undefined>(undefined);
  public username$ = this.usernameSubject.asObservable();

  private userIdSubject = new BehaviorSubject<number | undefined>(undefined);
  public userId$ = this.userIdSubject.asObservable();

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
            this.usernameSubject.next(response.username);
            this.userIdSubject.next(response.id);
            this.router.navigate(['/student']);
          } else if (response.role === 'teacher') {
            this.usernameSubject.next(response.username);
            this.userIdSubject.next(response.id);
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

  // Method to set the username after successful login
  setUsername(username: string): void {
    console.log('Setting username:', username); // Log to check when username is set
    this.usernameSubject.next(username); // Emit the username
  }
}
