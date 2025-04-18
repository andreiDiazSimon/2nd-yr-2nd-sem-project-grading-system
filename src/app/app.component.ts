import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
