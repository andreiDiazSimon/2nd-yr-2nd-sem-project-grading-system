import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { StudentGrades } from '../../Interfaces/student-grade.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-teacher-section-pick',
  templateUrl: 'teacher-section-pick.component.html',
})
export class TeacherSectionPickComponent implements OnInit {
  section!: string;
  students: StudentGrades[] = [];
  selectedTerm: string = 'Prelim';

  constructor(
    private route: ActivatedRoute,
    private svc: TeacherService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.section = this.route.snapshot.paramMap.get('section')!;
    this.svc.getGrades(this.section).subscribe((data) => {
      this.students = data;
    });
  }

  calculateRawGrade(g: any): number {
    const total =
      (g.week1 || 0) +
      (g.week2 || 0) +
      (g.week3 || 0) +
      (g.week4 || 0) +
      (g.week5 || 0) +
      (g.exam || 0);

    const rawGrade = (total / 600) * 100;

    return Math.round(rawGrade * 100) / 100;
  }

  calculateTransmutedGrade(raw: number): number {
    if (raw >= 60) {
      const transmutedGrade = Math.floor((raw - 60) / 1.6 + 75);
      return transmutedGrade;
    }
    return 60;
  }

  calculateAverage(g: any): string {
    const total = this.calculateRawGrade(g);
    const avg = this.calculateTransmutedGrade(total);

    return `${avg}`;
  }

  saveGrades() {
    const payload = this.students.map((stu) => ({
      studentId: stu.id,
      grades: stu.grades.map((g) => ({
        term: g.term,
        week1: g.week1,
        week2: g.week2,
        week3: g.week3,
        week4: g.week4,
        week5: g.week5,
        exam: g.exam,
      })),
    }));
    console.log(payload);
    this.svc.saveGrades(payload).subscribe({
      next: () => {
        alert('Grades saved successfully!');
      },
      error: (err) => {
        console.error(err);
        alert('Failed to save grades.');
      },
    });
  }
}
