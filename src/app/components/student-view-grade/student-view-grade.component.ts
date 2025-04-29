import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInService } from '../../services/sign-in.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-student-view-grade',
  templateUrl: './student-view-grade.component.html',
  styleUrls: ['./student-view-grade.component.css'],
})
export class StudentViewGradeComponent implements OnInit, OnDestroy {
  public userId: number | undefined;
  private userIdSubscription!: Subscription;

  selectedTerm = 'Prelim';
  reportCard: {
    teacherName: string;
    subject: string;
    combinedPrelimGrade: number | null;
    combinedMidtermGrade: number | null;
    combinedFinalsGrade: number | null;
  }[] = [];

  constructor(
    private http: HttpClient,
    private signInService: SignInService,
  ) {}

  ngOnInit(): void {
    this.userIdSubscription = this.signInService.userId$.subscribe({
      next: (userId) => {
        if (userId !== undefined) {
          this.userId = userId;
          console.log('Student ID:', userId);
          this.fetchGrades(userId);
        } else {
          console.warn('User ID is undefined.');
        }
      },
      error: (error) => {
        console.error('Error fetching student ID:', error);
      },
    });
  }

  fetchGrades(studentId: number): void {
    this.http
      .get<any[]>(`http://localhost:5085/api/student/${studentId}`)
      .subscribe({
        next: (grades) => {
          this.reportCard = grades;
          console.log('Grades fetched:', grades);
        },
        error: (err) => {
          console.error('Failed to fetch grades:', err);
        },
      });
  }

  getRawGradeForSelectedTerm(grade: any): number {
    switch (this.selectedTerm.toLowerCase()) {
      case 'prelim':
        return grade.combinedPrelimGrade ?? 0;
      case 'midterm':
        return grade.combinedMidtermGrade ?? 0;
      case 'finals':
        return grade.combinedFinalsGrade ?? 0;
      default:
        return 0;
    }
  }

  transmuteGrade(raw: number): { gpa: number; status: string } {
    if (raw >= 99) return { gpa: 4.0, status: 'Passed' };
    if (raw >= 96) return { gpa: 3.8, status: 'Passed' };
    if (raw >= 90) return { gpa: 3.1, status: 'Passed' };
    if (raw >= 87) return { gpa: 2.6, status: 'Passed' };
    if (raw >= 84) return { gpa: 2.3, status: 'Passed' };
    if (raw >= 81) return { gpa: 2.0, status: 'Passed' };
    if (raw >= 78) return { gpa: 1.6, status: 'Passed' };
    if (raw >= 75) return { gpa: 1.2, status: 'Passed' };
    if (raw < 60) return { gpa: 0.0, status: 'Failed' };
    return { gpa: 1.0, status: 'Conditional' };
  }

  ngOnDestroy(): void {
    if (this.userIdSubscription) {
      this.userIdSubscription.unsubscribe();
    }
  }
}
