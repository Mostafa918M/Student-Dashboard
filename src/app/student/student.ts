import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
@Input() name:string ="";
 @Output() studentSelected = new EventEmitter<string>();
  selectStudent() {
    this.studentSelected.emit(this.name);
  }
}
