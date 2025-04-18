import { CommonModule } from '@angular/common';
import { AddStudentModalComponent } from '../../modals/add-student-modal/add-student-modal.component';

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-student',
  imports: [AddStudentModalComponent, CommonModule, RouterLink],
  templateUrl: './admin-student.component.html',
  styleUrl: './admin-student.component.css',
})
export class AdminStudentComponent {
  showAddStudentModal = false;

  handleStudentAdded() {
    this.showAddStudentModal = false;
    alert('goodzz');
  }
}
