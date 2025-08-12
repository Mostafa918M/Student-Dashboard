import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Student } from '../student/student';
import { Courses } from "../courses/courses";

@Component({
  selector: 'app-teacher',
  imports: [Student, Courses,Courses],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css'
})
export class Teacher {
students = ['Mostafa'];
selectedStudent:string =''
 @ViewChild('studentNameInput') inputElement!: ElementRef;
  @ViewChildren(Student) studentComponents!: QueryList<Student>;

onStudentChosen(name: string) {
  this.selectedStudent = name;
}
addStudent(newName: string) {
  if (newName.trim()) {
    this.students.push(newName);
    console.log(this.students)
  }
}
 ngAfterViewInit() {
    console.log('List of student components:', this.studentComponents.toArray());
  }


}
