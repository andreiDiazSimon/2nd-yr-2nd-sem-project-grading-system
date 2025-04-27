import { Component } from '@angular/core';
import { StudentComponent } from '../../components/student/student.component';
import { RouterOutlet } from '@angular/router';
import { StudentNavbarComponent } from '../../components/student-navbar/student-navbar.component';

@Component({
  selector: 'app-student-layout',
  imports: [StudentNavbarComponent, RouterOutlet],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.css',
})
export class StudentLayoutComponent {}
