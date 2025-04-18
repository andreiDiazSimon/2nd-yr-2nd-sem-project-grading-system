import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import necessary routing features

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {}
