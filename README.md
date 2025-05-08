# 🎬 MovieHub

**MovieHub** is a student examination project created for the **React module at Okten School**. It is a web application for browsing and searching movies using **The Movie Database (TMDb)** API. The project includes responsive design, guest access, user authentication (based on dummy data), and modern frontend tooling.

---

## 📚 About the Project

This application allows users to:

- 🔍 Browse trending and popular movies
- 🧾 View detailed information about each film
- 🔐 Log in as a user or continue as a guest
- 🧑‍💼 Display user name info with logout functionality
- 🧱 Explore responsive layouts and smooth UI using TailwindCSS

---

## 🛠️ Technologies Used

- **React 19**
- **React DOM 19**
- **React Router DOM 7**
- **Redux Toolkit 2** + **React Redux 9**
- **TailwindCSS 4**
- **@tailwindcss/vite 4**
- **Axios 1.9**
- **React Icons 5.5**
- **React Hook Form 7.56**
- **Joi 17.13** + **@hookform/resolvers 5.0**
- **React Layout Masonry 1.2**

---

## 🔧 Getting Started

### ✅ Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 8

### 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/denys-badass/okten-react-exam
   cd okten-react-exam
   
2. Install dependencies:

    ```bash
    npm install

3. Create a .env file in the project root and add the following variables:

    ```bash
    VITE_IMAGE_BASE_URL=https://image.tmdb.org/t/p
    VITE_API_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTc0MGY1NzVmZmMyNDQzZDRjZTIzY2I4NTk1M2ZkMCIsIm5iZiI6MTc0NTgzMzY3MC4yNjIsInN1YiI6IjY4MGY0ZWM2NDYwMzU3MWVhZDBmOGI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vOkM9zakig0Tx0krPqELgaIZBvfFX99Ykj8hq55MF7c

3. 🚀 Start the development server

    ```bash
    npm run dev

4. Visit the app at http://localhost:5173

🔐 Authentication

The app uses a mock login system powered by the endpoint:
https://dummyjson.com/users

For example you can log in with:
•	Username: emilys
•	Password: emilyspass

Or choose Continue as a Guest for limited access.
