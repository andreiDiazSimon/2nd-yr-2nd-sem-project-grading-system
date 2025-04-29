import { SignInService } from '../../services/sign-in.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit, OnDestroy {
  public username: string | undefined;
  private usernameSubscription!: Subscription;

  constructor(private signInService: SignInService) {}

  ngOnInit(): void {
    this.usernameSubscription = this.signInService.username$.subscribe(
      (username) => {
        this.username = username;
      },
    );
  }

  ngOnDestroy(): void {
    if (this.usernameSubscription) {
      this.usernameSubscription.unsubscribe();
    }
  }
}
