import { SignInResponse } from '../../Interfaces/sign-in-response.interface';
import { SignInService } from '../../services/sign-in.service';

import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

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
    private SignInService: SignInService,
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
      this.SignInService.signIn(apiUrl, payload, options);
    }
  }
}
