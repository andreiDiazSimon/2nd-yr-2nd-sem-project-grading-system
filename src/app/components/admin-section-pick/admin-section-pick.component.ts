import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AdminSectionService } from '../../services/admin-section.service';
import { Student } from '../../Interfaces/admin-student.interface';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-admin-section-pick',
  templateUrl: './admin-section-pick.component.html',
  styleUrls: ['./admin-section-pick.component.css'],
})
export class AdminSectionPickComponent implements OnInit {
  section: string = '';
  students: Student[] = [];

  constructor(
    private adminSectionService: AdminSectionService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.section = params.get('section') || '';
      this.loadStudents();
    });
  }

  loadStudents(): void {
    this.adminSectionService.getStudentsBySection(this.section).subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (err) => {
        console.error('Error fetching students:', err);
      },
    });
  }
}
