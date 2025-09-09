# Project Management Tool

A modern **Project Management Tool** built with React, Vite, Tailwind CSS, Node.js, Express, and MongoDB.  
Supports task management, Kanban board workflows, team collaboration with comments, project analytics, and a Gantt chart for project timelines.

---

## 🛠 Features

- **Task Assignment & Tracking**: Create, update, and track tasks across projects.  
- **Kanban Board**: Visualize workflow and move tasks between statuses.  
- **Team Collaboration**: Add comments to tasks for real-time discussion.  
- **Project Analytics & Reporting**: Basic insights into project progress.  
- **Gantt Chart**: Visualize project timelines and dependencies.  
- **Authentication**: JWT-based user login and registration.  

---

## 💻 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Additional Libraries**: `gantt-task-react` for Gantt chart, `axios` for API requests  

---

## 📂 Project Structure

Projecttool/
├─ client/ # React + Vite frontend
│ ├─ src/
│ │ ├─ pages/ # Dashboard, Projects, Team, GanttPage
│ │ ├─ shared/ # GanttAddon.jsx and shared components
│ │ ├─ index.css
│ │ └─ main.jsx
├─ server/ # Express + MongoDB backend
│ ├─ models/ # Mongoose schemas
│ ├─ routes/ # API routes
│ ├─ controllers/ # Business logic
│ ├─ middleware/ # Auth middleware
│ └─ server.js
├─ README.md
└─ package.json


---

## ⚡ Installation & Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/gauravdhoble2004/project-management-tool.git
cd project-management-tool

2. Setup Backend

cd server
cp .env.example .env
# Set your MONGO_URI and JWT_SECRET in .env
npm install
npm run dev

3. Setup Frontend

cd ../client
npm install
npm run dev

🔧 Notes

Ensure MongoDB is running locally or provide a cloud MongoDB URI in .env.

The project includes placeholder data — you can seed your own data for testing.

Future improvements: real-time updates with Socket.IO, enhanced analytics, and role-based access control.
