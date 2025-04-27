import { AdminSectionService } from '../../services/admin-section.service';

import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css'],
})
export class AdminSectionComponent implements OnInit {
  sections: string[] = [];

  constructor(
    private adminSectionService: AdminSectionService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadSections();
  }

  loadSections(): void {
    this.adminSectionService.getAllSections().subscribe({
      next: (data) => {
        this.sections = data;
      },
      error: (err) => {
        console.error('Error fetching sections:', err);
      },
    });
  }

  onSectionClick(section: string): void {
    this.router.navigate(['/admin/section-pick', section]);
  }
}
