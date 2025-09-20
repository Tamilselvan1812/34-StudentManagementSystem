
# React + Spring Boot Project

## 📌 Overview

This is a **full-stack web application** built with:

* **Frontend**: React (`my-app`)
* **Backend**: Spring Boot (`demo`)

The React frontend communicates with the Spring Boot backend via REST APIs.

---

## 🚀 Project Structure

```
Project 1/
│── demo/        # Spring Boot backend
│── my-app/      # React frontend
```

---

## 🖥️ Running the Backend (Spring Boot)

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

---

## 🌐 Running the Frontend (React)

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

---

## 🔗 API Connection

* The React app calls APIs from the Spring Boot backend.
* Example endpoint (from Spring Boot):

  ```
  GET http://localhost:8080/hii
  ```

---

## 📜 Scripts

### Frontend (React)

* `npm start` → Run dev server
* `npm run build` → Build production files

### Backend (Spring Boot)

* `mvn spring-boot:run` → Run application
* `mvn clean package` → Build JAR

---

## 📖 Future Improvements

* Add database (MySQL / PostgreSQL) support
* Dockerize frontend & backend
* Deploy on cloud (Heroku, AWS, or Render)



Do you want me to also add **screenshots section** (placeholders) so you can show demo images later?
