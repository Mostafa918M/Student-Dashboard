import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Teacher } from './teacher/teacher';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Teacher],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Student-Dashboard');
}
