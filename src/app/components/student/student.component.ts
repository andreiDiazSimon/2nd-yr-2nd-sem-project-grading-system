import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../../services/sign-in.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  username: string | undefined;
  private usernameSubscription!: Subscription;

  constructor(
    private router: Router,
    private signInService: SignInService,
  ) {}

  ngOnInit(): void {
    this.usernameSubscription = this.signInService.username$.subscribe(
      (username) => {
        this.username = username;
      },
    );
  }

  goToViewGrade() {
    this.router.navigate(['/student/view-grade']);
  }

  ngOnDestroy(): void {
    if (this.usernameSubscription) {
      this.usernameSubscription.unsubscribe();
    }
  }
}
