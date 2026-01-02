# Task Tracker Application

A full-stack Task Tracker application built as part of an internship assignment.  
The application allows users to manage tasks with priorities, due dates, and status updates in a clean and responsive UI.

---

## 🚀 Features

- Add new tasks with title, description, priority, and due date
- Disable submit button until required fields are filled
- View all tasks dynamically without page reload
- Mark tasks as completed
- Delete tasks
- Clear status indicators (Pending / Completed)
- Responsive and user-friendly UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS (via CDN)
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

---

## 🌐 Live Demo

- **Frontend (Vercel):**  
  👉 https://task-tracker-assignment-gules.vercel.app/

- **Backend API (Render):**  
  👉 https://task-tracker-assignment.onrender.com/api/tasks

---

## 📁 Project Structure

Task-Tracker/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ ├── api.js
│ │ └── index.js
│ └── package.json
│
├── .gitignore
└── README.md

yaml
Copy code

---

## ⚙️ Setup Instructions (Local)

### Backend
```bash
cd backend
npm install
node server.js
Frontend
bash
Copy code
cd frontend
npm install
npm start
📝 Notes
node_modules are excluded using .gitignore

Environment variables are handled securely

Backend is deployed on Render

Frontend is deployed on Vercel

Project follows all assignment requirements

Developed by:
Sadhana Khobragade