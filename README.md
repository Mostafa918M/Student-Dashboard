# Student Dashboard — Angular 20

A simple Angular 20 application that demonstrates:
- Component communication with `@Input` and `@Output`
- Dynamic rendering using `*ngFor` / `@for`
- Template reference variables and `@ViewChild` / `@ViewChildren`
- Content projection (`<ng-content>`) and `@ContentChild`

---

## Overview

The Student Dashboard consists of three main components:

### Teacher Component
- Displays the teacher's name.
- Maintains a dynamic list of students.
- Allows adding new students via an input field.
- Shows the currently selected student.

### Student Component
- Receives the student's name via `@Input`.
- Emits the selected student's name back to Teacher using `@Output`.
- Displays each student in a styled card with a "Select" button.

### Courses Component
- Demonstrates content projection — receives and displays a course list from the parent.
- Uses `@ContentChild` to get a reference to projected content.
- Styled as a clean card block.

---

## Tech Stack
- Angular 20
- TypeScript
- HTML5 & CSS3

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/student-dashboard.git
cd student-dashboard
