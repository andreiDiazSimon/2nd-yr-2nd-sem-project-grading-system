import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { SignInService } from '../../services/sign-in.service';
import { CommonModule } from '@angular/common';
import { StudentGrades } from '../../Interfaces/student-grade.interface';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [CommonModule, RouterLink, FormsModule],
  selector: 'app-teacher-section-pick',
  templateUrl: './teacher-section-pick.component.html',
})
export class TeacherSectionPickComponent implements OnInit {
  public userId: number | undefined;
  private userIdSubscription!: Subscription;

  section: string = '';
  students: StudentGrades[] = []; // Ensure the type is correctly defined
  selectedTerm = 'Prelim'; // Default value

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private signInService: SignInService,
  ) {}

  ngOnInit() {
    // Get the section from the route parameters
    this.section = this.route.snapshot.paramMap.get('section')!;
    console.log('current section', this.section);

    // Get the teacherId from the logged-in user and set it
    this.signInService.userId$.subscribe((userId) => {
      if (userId !== undefined) {
        this.userId = userId; // Set the userId here
        this.teacherService
          .getStudentsAndGradesBySectionAndTeacher(this.section, this.userId)
          .subscribe({
            next: (data) => {
              console.log('Students and grades:', data);
              this.students = data;
            },
            error: (error) =>
              console.error('Error fetching students and grades', error),
          });
      }
    });
  }

  updateGrade(studentId: number, grade: any) {
    const rawGrade = this.calculateRawGrade(grade); // Calculate raw grade
    const transmutatedGrade = this.mapToTransmutatedGrade(rawGrade); // Map raw grade to transmutated grade
    const generalAverage = rawGrade; // General average is the same as raw grade

    const payload = {
      studentId: studentId,
      teacherId: this.userId,
      term: grade.term,
      week1: grade.week1,
      week2: grade.week2,
      week3: grade.week3,
      week4: grade.week4,
      week5: grade.week5,
      exam: grade.exam,
      rawGrade: rawGrade,
      transmutatedGrade: transmutatedGrade,
      generalAverage: generalAverage,
    };

    console.log('payload: ', payload);

    this.http
      .put('http://localhost:5085/api/teacher/grades/update', payload)
      .subscribe({
        next: (res) => {
          alert('Grade saved!');
        },
        error: (err) => {
          console.error('Error saving grade', err);
          alert('Failed to save grade.');
        },
      });
  }

  mapToTransmutatedGrade(rawGrade: number): number {
    if (rawGrade >= 98.4) return 99;
    if (rawGrade >= 96.8) return 98;
    if (rawGrade >= 95.2) return 97;
    if (rawGrade >= 93.6) return 96;
    if (rawGrade >= 92.0) return 95;
    if (rawGrade >= 90.4) return 94;
    if (rawGrade >= 88.8) return 93;
    if (rawGrade >= 87.2) return 92;
    if (rawGrade >= 85.6) return 91;
    if (rawGrade >= 84.0) return 90;
    if (rawGrade >= 82.4) return 89;
    if (rawGrade >= 80.8) return 88;
    if (rawGrade >= 79.2) return 87;
    if (rawGrade >= 77.6) return 86;
    if (rawGrade >= 76.0) return 85;
    if (rawGrade >= 74.4) return 84;
    if (rawGrade >= 72.8) return 83;
    if (rawGrade >= 71.2) return 82;
    if (rawGrade >= 69.6) return 81;
    if (rawGrade >= 68.0) return 80;
    if (rawGrade >= 66.4) return 79;
    if (rawGrade >= 64.8) return 78;
    if (rawGrade >= 63.2) return 77;
    if (rawGrade >= 61.6) return 76;
    if (rawGrade >= 60.0) return 75;
    if (rawGrade >= 56.0) return 74;
    if (rawGrade >= 52.0) return 73;
    if (rawGrade >= 48.0) return 72;
    if (rawGrade >= 44.0) return 71;
    if (rawGrade >= 40.0) return 70;
    if (rawGrade >= 36.0) return 69;
    if (rawGrade >= 32.0) return 68;
    if (rawGrade >= 28.0) return 67;
    if (rawGrade >= 24.0) return 66;
    if (rawGrade >= 20.0) return 65;
    if (rawGrade >= 16.0) return 64;
    if (rawGrade >= 12.0) return 63;
    if (rawGrade >= 8.0) return 62;
    if (rawGrade >= 4.0) return 61;
    return 60; // Default for 0 to 3.99 range
  }

  calculateRawGrade(grade: any): number {
    // Calculate the raw grade by averaging the week grades and the exam
    const rawGrade =
      (grade.week1 +
        grade.week2 +
        grade.week3 +
        grade.week4 +
        grade.week5 +
        grade.exam) /
      6;
    return this.roundToTwoDecimalPlaces(rawGrade);
  }

  // Helper method to round to 2 decimal places
  roundToTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }

  ngOnDestroy(): void {
    if (this.userIdSubscription) {
      this.userIdSubscription.unsubscribe();
    }
  }
}
