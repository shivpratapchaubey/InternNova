# TaskFlow — Task Management Application

## Project Overview

**TaskFlow** is a fully interactive, browser-based Task Management Application built using **HTML**, **CSS**, and **JavaScript**. It allows users to create, read, update, and delete tasks with rich metadata such as priority levels, categories, and due dates. All data persists across sessions using the browser's `localStorage`. The application is designed for students, professionals, and everyday users who need a clean, intuitive way to organise their work.

## Project Objective

To build a fully functional, single-page web application that demonstrates mastery of front-end fundamentals — semantic HTML, responsive CSS, and interactive JavaScript — including DOM manipulation, event handling, form validation, array methods, and local storage.

## Target Users

- Students managing assignments and deadlines  
- Professionals tracking work tasks  
- Anyone who needs a lightweight, offline-capable to-do manager  

## Features Implemented

| # | Feature | Description |
|---|---------|-------------|
| 1 | **Add / Edit / Delete Tasks** | Full CRUD operations with form-based input |
| 2 | **Search (Live)** | Real-time keyword search across title & description |
| 3 | **Category Filtering** | Filter tasks by Work, Personal, Shopping, Health, Education |
| 4 | **Sorting** | Sort by Newest, Oldest, Priority, Name A–Z, Due Date |
| 5 | **View Tabs** | Toggle between All / Active / Completed tasks |
| 6 | **Priority Levels** | High, Medium, Low — color-coded badges |
| 7 | **Form Validation** | Required-field checks with real-time error messages |
| 8 | **Dynamic Counters** | Live Total / Active / Done counts in the header |
| 9 | **Overdue Detection** | Tasks past their due date are flagged automatically |
| 10 | **Confirmation Modal** | Delete & clear actions require user confirmation |
| 11 | **LocalStorage Persistence** | Tasks survive page refresh and browser restart |
| 12 | **Responsive Design** | Works on desktop, tablet, and mobile screens |

## Technologies Used

- **HTML5** — Semantic structure, forms, inputs  
- **CSS3** — Flexbox layout, custom properties, animations, media queries  
- **JavaScript (ES6)** — DOM API, event handling, localStorage, array methods  

## JavaScript Concepts Used

| Concept | Where Used |
|---------|-----------|
| Variables (`let`, `const`) | State management, DOM references |
| Functions | `addTask()`, `deleteTask()`, `renderTasks()`, `validateForm()`, etc. |
| Arrays | `tasks[]` — main data store |
| Objects | Each task is an object with `id`, `title`, `category`, `priority`, etc. |
| Conditional Statements | Form validation, overdue check, sort/filter branching |
| Loops | `for` loop in `renderTasks()`, `forEach` on nav links |
| Array Methods | `.push()`, `.filter()`, `.find()`, `.findIndex()`, `.sort()`, `.reduce()`, `.forEach()` |
| DOM Manipulation | `createElement`, `appendChild`, `innerHTML`, `classList`, `dataset` |
| Events | `submit`, `click`, `change`, `input` |
| Local Storage | `getItem`, `setItem`, `JSON.parse`, `JSON.stringify` |

## File Structure

```
TaskFlow/
├── index.html      ← Main HTML page
├── style.css       ← All CSS styles
├── script.js       ← All JavaScript logic
└── README.md       ← This documentation
```

## How to Run

1. Download / clone the project folder.  
2. Open `index.html` in any modern web browser (Chrome, Edge, Firefox).  
3. No server or build tools required — it runs entirely in the browser.

## Challenges Faced

- **Keeping edit and add modes in a single form** — solved by toggling `editingId` state and dynamically changing the form title / button text.  
- **Preventing XSS when rendering user input** — implemented an `escapeHtml()` helper that uses `textContent` to sanitise strings before inserting them into `innerHTML`.  
- **Sorting tasks with missing due dates** — added null-checks inside the sort comparator so tasks without a date are pushed to the end rather than causing errors.

## What I Learned

- How to structure a real-world CRUD application using only vanilla JavaScript.  
- The importance of separating data (array/objects) from presentation (DOM).  
- Practical use of array higher-order methods (`.filter()`, `.sort()`, `.reduce()`) for searching, filtering, and aggregating data.  
- How `localStorage` can be used to create a persistent, offline-capable app without a backend.

## Future Improvements

- Add drag-and-drop reordering of tasks.  
- Implement sub-tasks / checklists inside each task.  
- Add dark-mode toggle.  
- Export tasks as CSV or PDF.  
- Sync tasks across devices with a cloud backend (e.g., Firebase).

---

*Built with ❤️ using HTML, CSS & JavaScript — © 2026 TaskFlow*
