import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AdminTeacherService } from '../../services/admin-teacher.service';
import { Teacher } from '../../Interfaces/admin-teacher.interface';

@Component({
  selector: 'app-admin-teacher',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-teacher.component.html',
  styleUrl: './admin-teacher.component.css',
})
export class AdminTeacherComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(private adminTeacherService: AdminTeacherService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers() {
    this.adminTeacherService.getAllTeachers().subscribe({
      next: (data) => {
        this.teachers = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error fetching teachers', err);
      },
    });
  }
}
