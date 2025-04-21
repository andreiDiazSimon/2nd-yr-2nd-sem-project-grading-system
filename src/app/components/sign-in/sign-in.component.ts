import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      alert('Please fill out all fields.');
      return;
    }
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      let apiUrl = 'http://localhost:5085/api/signin';
      let payload = this.form.value;
      let options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };
     this.http.post(apiUrl, payload, options)
      .subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['/admin']);
        },
        error: (err) => console.error('Error', err),
      });
    }
  }
}
