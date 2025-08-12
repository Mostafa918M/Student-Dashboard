import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {
 @ContentChild('courseList') courseListElement!: ElementRef;

  ngAfterContentInit() {
    console.log('Projected course list:', this.courseListElement);
  }
}
