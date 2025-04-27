import { Component } from '@angular/core';
import { TeacherNavbarComponent } from '../../components/teacher-navbar/teacher-navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-teacher-layout',
  imports: [TeacherNavbarComponent, RouterOutlet],
  templateUrl: './teacher-layout.component.html',
  styleUrl: './teacher-layout.component.css',
})
export class TeacherLayoutComponent {}
