# 🌟 GitHub Issues Tracker

A fully responsive and interactive **GitHub Issues Tracker Web Application** built as part of Assignment-05. This project simulates a real-world issue tracking system with authentication, filtering, searching, and detailed issue views using REST API integration.

---

## 🚀 Live Link

[https://your-live-site-link.com](https://joygoswaminiloy2023-droid.github.io/B13-A5-Github-Issue-Tracker/main.html)

---

## 🎯 Project Description

This project is a simplified clone of a GitHub Issues Tracker. Users can log in using demo credentials, view issues, filter them by status (All, Open, Closed), search issues, and view full issue details in a modal popup.

It focuses on **JavaScript DOM manipulation, API integration, responsive design, and UI interaction handling**.

---

## 🔑 Login Credentials

Username: admin  
Password: admin123  

---

## 🌐 API Endpoints

Get all issues:  
https://phi-lab-server.vercel.app/api/v1/lab/issues  

Get single issue:  
https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}  

Example:  
https://phi-lab-server.vercel.app/api/v1/lab/issue/33  

Search issues:  
https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}  

Example:  
https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications  

---

## ✨ Features

- Login system with demo credentials  
- Fetch and display issues from API  
- Filter issues (All / Open / Closed)  
- Search functionality  
- Modal popup for issue details  
- Responsive design for all devices  
- Loading spinner during API calls  
- Active tab highlighting  

---

## 🚀 Challenges Implemented

- Dynamic border color  
  - Open → Green  
  - Closed → Purple  
- Loading spinner during API calls  
- Search with API integration  
- Active tab management  
- Clean commit history (8+ commits)  

---

## 🛠️ Tech Stack

HTML5  
CSS3  
Tailwind CSS / DaisyUI  
JavaScript (Vanilla JS)  
REST API  

---

# 📘 Interview Questions & Answers

---

## 1. What is the difference between var, let, and const?

**Answer:**

- `var` is function scoped and can be redeclared and updated.
- `let` is block scoped and can be updated but not redeclared.
- `const` is block scoped and cannot be redeclared or updated.

Example:
```js id="varletconst"
var a = 10;
let b = 20;
const c = 30;
