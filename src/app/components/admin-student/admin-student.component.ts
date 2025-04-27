import { CommonModule } from '@angular/common';
import { AddStudentModalComponent } from '../../modals/add-student-modal/add-student-modal.component';
import { Student } from '../../Interfaces/admin-student.interface';
import { AdminStudentService } from '../../services/admin-student.service';

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-student',
  imports: [AddStudentModalComponent, CommonModule, RouterLink],
  templateUrl: './admin-student.component.html',
  styleUrl: './admin-student.component.css',
})
export class AdminStudentComponent implements OnInit {
  showAddStudentModal = false;
  students: Student[] = [];

  constructor(private adminStudentService: AdminStudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  handleStudentAdded() {
    this.showAddStudentModal = false;
    this.loadStudents();
  }

  removeStudent(studentId: number) {
    this.adminStudentService.removeStudent(studentId).subscribe({
      next: (response) => {
        console.log(response);
        this.loadStudents();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  loadStudents() {
    this.adminStudentService.getAllStudents().subscribe({
      next: (data) => {
        console.log(data);
        this.students = data;
      },
      error: (err) => {
        console.error('Error fetching students', err);
      },
    });
  }
}
