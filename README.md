📒 NoteBookApp

A full-stack MERN Note Taking Application with authentication, CRUD operations, and a responsive UI. Users can register, log in, and manage their notes (create, view, update, delete). Built with React + TailwindCSS on the frontend and Node.js + Express + MongoDB on the backend.

🚀 Features

🔐 User Authentication (Register/Login using JWT & bcryptjs)

📝 Create, Read, Update, Delete (CRUD) notes

🔍 Search and filter notes

📱 Responsive across all devices

☁️ Secure backend with MongoDB + Mongoose

📂 File uploads with Multer (if you’re using it for note attachments)

⚡ Toast notifications & smooth UI with React Hot Toast + DaisyUI

🛠️ Tech Stack
Frontend

React 19

React Router DOM

React Hook Form

React Icons

React Slick + Slick Carousel

Tailwind CSS + DaisyUI

Axios

Vite (Build tool)

Backend

Node.js

Express.js

MongoDB + Mongoose

bcryptjs (password hashing)

Multer (file uploads)

dotenv (environment config)

CORS

📂 Project Structure
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

⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/Debasish-Web-Dev/NoteBookApp.git
cd NoteBookApp

2️⃣ Backend Setup
cd Backend
npm install


Create a .env file in the Backend folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret


Run the backend:

node index.js

3️⃣ Frontend Setup
cd Frontend
npm install
npm run dev

▶️ Usage

Start the backend server (node index.js).

Start the frontend (npm run dev).

Open browser at http://localhost:5173/ (Vite default).

Register/Login → Manage your notes! 🎉

📸 Screenshots

(You can add screenshots of your app UI here for GitHub preview)

🔮 Future Scope

Add cloud storage (e.g., AWS S3) for file uploads

Rich text editing (bold, italic, lists in notes)

Note sharing with other users

Dark/Light mode toggle

PWA (Progressive Web App) support

📚 References

React Docs

TailwindCSS Docs

Express Docs

MongoDB Docs
