import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-student-modal.component.html',
  styleUrl: './add-student-modal.component.css',
})
export class AddStudentModalComponent {
  form: FormGroup;
  @Output() cancelAddStudent = new EventEmitter<void>();
  @Output() studentAdded = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      section: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      alert('Please fill out all fields.');
      return;
    }
    if (this.form.valid) {
      console.log(this.form.value);
      let url = 'http://localhost:5085/api/admin/student/add-student';
      let payload = this.form.value;
      let options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };
      this.http.post(url, payload, options).subscribe({
        next: (response) => {
          console.log(response);
          this.studentAdded.emit();
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  cancel() {
    return this.cancelAddStudent.emit();
  }
}
