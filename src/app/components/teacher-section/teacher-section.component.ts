import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-teacher-section',
  templateUrl: './teacher-section.component.html',
})
export class TeacherSectionComponent implements OnInit {
  sections: string[] = [];

  constructor(
    private svc: TeacherService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.svc.getAllSections().subscribe({
      next: (response) => {
        console.log('all sections: ', response);
        this.sections = response;
      },
      error: (error) => {
        console.error('error', error);
      },
    });
  }

  go(section: string) {
    this.router.navigate(['/teacher/section-pick', section]);
  }
}
