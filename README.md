# Taskify – Full MERN Task Management Application

Taskify is a robust **MERN stack** (MongoDB, Express.js, React, Node.js) application designed for managing tasks with ease. It features CRUD functionality, task filtering, user authentication, and clean UI components across the frontend and backend.

---

## 🚀 Features

- **Task Management**: Users can create, view, update, and delete tasks.
- **Task Details**: Each task includes title, description, due date, priority, and status.
- **Filtering**: Filter tasks by status or priority directly from the task list.
- **Authentication**: Optional JWT-based user sign-up, login, and session handling.
- **Responsive UI**: Built using React with Tailwind CSS and DaisyUI for styling.

---

## 📂 Project Structure

```
Taskify/
├── Backend/                      
│   ├── .env                      
│   ├── index.js                  
│   ├── package.json              
│   ├── middlewares/              
│   │   ├── auth.js               
│   │   └── index.js              
│   ├── Model/                    
│   │   ├── index.js              
│   │   ├── Task.js               
│   │   └── User.js               
│   ├── routes/                   
│   │   ├── index.js              
│   │   ├── taskRoute.js          
│   │   └── userRoute.js          
│   └── utils/                    
│       ├── Db/                   
│       │   └── connectToDb.js    
│       └── Task/                 
│           ├── index.js          
│           ├── taskValidation.js 
│           └── userValidation.js 
│
├── Frontend/
│   └── taskify/                  
│       ├── .gitignore            
│       ├── index.html            
│       ├── package.json          
│       ├── README.md             
│       ├── vite.config.js        
│       ├── eslint.config.js      
│       ├── src/
│           ├── App.jsx           
│           ├── App.css           
│           ├── index.css         
│           ├── main.jsx          
│           ├── hooks/            
│           │   ├── index.js      
│           │   ├── useAxiosGet.jsx
│           │   └── useAxiosMutation.jsx
│           ├── store/            
│           │   ├── store.js      
│           │   ├── task/         
│           │   │   └── taskSlice.js
│           │   └── user/         
│           │       └── userSlice.js
│           ├── Pages/
│               ├── index.js      
│               ├── Home.jsx      
│               ├── NewTask.jsx   
│               ├── TaskDetails.jsx
│               └── AccountPage.jsx
│           └── Components/
│               ├── Navbar/Navbar.jsx
│               ├── TaskLoadingSkeleton/TaskLoadingSkeleton.jsx
│               ├── TaskList/TaskList.jsx
│               ├── AlertComponent/AlertComponent.jsx
│               ├── SignUpForm/SignUpForm.jsx
│               ├── SignInForm/SignInForm.jsx
│               ├── TaskForm/TaskForm.jsx
│               └── CreateTaskForm/CreateTaskForm.jsx
│
├── README.md                    
└── .gitignore                   
```

---

## ⚙️ Installation & Setup

### Backend
1. Navigate to the `Backend/` folder:
   ```bash
   cd Backend
   npm install
   ```
2. Create a `.env` file with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=4000
   JWT_SECRET=your_jwt_secret
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

### Frontend
1. Move to the `Frontend/taskify/` folder:
   ```bash
   cd Frontend/taskify
   npm install
   npm run dev
   ```
2. The frontend usually runs at `http://localhost:5173`.

---

## 📌 API Endpoints

### User (Authentication)
- **POST** `/users/signup` – Register new users  
- **POST** `/users/signin` – User login  
- **POST/GET** `/users/signout` – Logout

### Tasks (Authenticated)
- **POST** `/tasks` – Create a new task  
- **GET** `/tasks` – Retrieve all tasks (supports filters)  
- **GET** `/tasks/:id` – Retrieve a single task  
- **PUT** `/tasks/:id` – Update a task  
- **DELETE** `/tasks/:id` – Delete a task

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests. Please use a `.env.example` for contributing safely.

---

## 📜 License

MIT License
