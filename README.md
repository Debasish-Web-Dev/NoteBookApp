# 📒 NoteBookApp

A full-stack **Note-Taking Application** with **user authentication** and **CRUD operations** for managing notes. Built with **React + Tailwind CSS** on the frontend and **Express + MongoDB** on the backend.

---

## ✨ Features
- 🔐 **User Authentication** (Register / Login with password hashing using bcrypt)
- 📝 **Notes Management (CRUD)**: Create, Read, Update, Delete notes
- 🔍 **Search & Filter Notes** for easy access
- 📱 **Responsive Design** (works on desktop, tablet, and mobile)
- ⚡ **Fast & Modern UI** with Tailwind CSS and DaisyUI
- ☁️ **Image/Attachment Support** (via Multer & MongoDB)
- 🔄 **Persistent Storage** with MongoDB

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS + DaisyUI
- React Router DOM
- Axios
- React Hook Form
- React Hot Toast
- React Icons
- React Slick + Slick Carousel

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- Multer (file uploads)
- bcryptjs (password hashing)
- dotenv
- cors

---

### Project Structure
```bash
NoteBookApp/
│── Backend/              # Express + MongoDB server
│   ├── models/           # Mongoose models (e.g., User, Notes)
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   ├── middleware/       # Auth middleware
│   └── index.js          # Server entry point
│
│── Frontend/             # React + Tailwind app
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # App pages (Login, Notes, etc.)
│   │   ├── hooks/        # Custom hooks
│   │   └── App.jsx       # Main React component
│   └── vite.config.js    # Vite config
│
└── README.md             # Project documentation
```

---

## 📌 Usage

- Register a new account or login.
- Create, edit, delete, and view notes.
- Search or filter notes for quick access.
- Upload images/files with notes (if enabled).

---

## 🎯 Expected Outcomes

- Secure authentication system
- User-friendly interface
- Efficient note management
- Scalability for future enhancements

---

## 🔮 Future Scope

- 🌙 Dark mode support
- 📂 Categorization / Tagging of notes
- 👥 Collaborative note sharing
- 🔔 Notifications & reminders
- 📲 Mobile app version (React Native)

## 🚀 Installation & Setup

### Clone the repository
```bash
git clone https://github.com/Debasish-Web-Dev/NoteBookApp.git
cd NoteBookApp
```
