# Student Dashboard — Angular 20

A simple Angular 20 application that demonstrates:
- Component communication with `@Input` and `@Output`
- Dynamic rendering using `@for`
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
```
###2. Install dependencies
```bash
npm install
```

###3. Run the development server
```bash
ng serve
```

Then visit http://localhost:4200 in your browser.

Project Structure
```bash
src/
│
├── app/
│   ├── teacher/
│   │   ├── teacher.ts
│   │   ├── teacher.html
│   │   └── teacher.css
│   │
│   ├── student/
│   │   ├── student.ts
│   │   ├── student.html
│   │   └── student.css
│   │
│   ├── courses/
│   │   ├── courses.ts
│   │   ├── courses.html
│   │   └── courses.css
│
└── main.ts
```

Learning Objectives
This project was built as a lab assignment to practice:

Parent-to-child data passing (@Input)

Child-to-parent event emission (@Output + EventEmitter)

Accessing DOM and child components via:

@ViewChild

@ViewChildren

@ContentChild

Using Angular's content projection to create flexible components.

License
This project is open source and available under the MIT License.