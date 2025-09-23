

# React + Spring Boot CRUD Project

## Overview

This is a **full-stack CRUD web application** built with:

* **Frontend**: React (`my-app`)
* **Backend**: Spring Boot (`demo`)

The React frontend communicates with the Spring Boot backend via REST APIs to **Add, List, Edit, and Delete student records**.



## Project Structure

```
Project/
│── demo/        # Spring Boot backend
│── my-app/      # React frontend
```



## Running the Backend (Spring Boot)

1. Navigate to the backend folder:

   ```bash
   cd demo
   ```

2. Run using Maven:

   ```bash
   ./mvnw spring-boot:run   # Mac/Linux
   mvnw spring-boot:run     # Windows
   ```

3. The backend will start on:

   ```
   http://localhost:8080
   ```



## Running the Frontend (React)

1. Navigate to the frontend folder:

   ```bash
   cd my-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. The frontend will run on:

   ```
   http://localhost:3000
   ```



## Features / API Endpoints

| Method | Endpoint                  | Description              |
| ------ | ------------------------- | ------------------------ |
| GET    | `/`                       | Get all students         |
| POST   | `/students`               | Add a new student        |
| DELETE | `/students/byName/{name}` | Delete a student by name |
| PUT    | `/students/byName/{name}` | Update a student by name |

### Frontend Features

* **Student Table**

  * Display all students with ID, Name, and Marks
  * Delete a student by clicking **Delete**
  * Edit a student by clicking **Edit** (navigates to form)

* **Student Form**

  * Add a new student
  * Edit existing student (pre-fills form and updates backend)

* **Routing**

  * `/` → Student Table
  * `/addStudent` → Student Form (for adding or editing)



## Scripts

### Frontend (React)

* `npm start` → Run development server
* `npm run build` → Build production files

### Backend (Spring Boot)

* `mvn spring-boot:run` → Run application
* `mvn clean package` → Build JAR



## Future Improvements

* Connect backend to a database (MySQL/PostgreSQL)
* Add proper form validation
* Improve UI with modern design frameworks (Material UI / Tailwind)
* Deploy frontend & backend on cloud (Heroku, AWS, Render)
* Add search/filter for students


