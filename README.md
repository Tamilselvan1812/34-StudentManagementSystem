

# React + Spring Boot + PostgreSQL Student Management

## Overview

This is a **full-stack student management web application** built with:

* **Frontend:** React (`my-app`)
* **Backend:** Spring Boot (`demo`)
* **Database:** PostgreSQL (`studentdb`)

The app allows you to **add, edit, delete, and view student details** (Name, Age, Marks) with persistent storage in PostgreSQL.


## Project Structure

```
Project/
│── demo/        # Spring Boot backend
│── my-app/      # React frontend
```



## Features

* Add new student (Name, Age, Marks)
* View all students in a table
* Edit student details
* Delete student by name
* Data is stored persistently in PostgreSQL



## Backend: Spring Boot

### 1. Setup

1. Open terminal and navigate to the backend folder:

```bash
cd demo
```

2. Add dependencies in `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <version>42.6.0</version>
</dependency>
```

3. Configure database in `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/studentdb
spring.datasource.username=postgres
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
```

> Replace `your_password` with your PostgreSQL password.


### 2. Run Backend

```bash
./mvnw spring-boot:run   # Mac/Linux
mvnw spring-boot:run     # Windows
```

Backend will run at:

```
http://localhost:8080
```



### 3. API Endpoints

| Method | Endpoint                  | Description            |
| ------ | ------------------------- | ---------------------- |
| GET    | `/`                       | Fetch all students     |
| POST   | `/students`               | Add new student        |
| PUT    | `/students/byName/{name}` | Update student by name |
| DELETE | `/students/byName/{name}` | Delete student by name |



## Frontend: React

### 1. Setup

1. Navigate to frontend folder:

```bash
cd my-app
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm start
```

Frontend will run at:

```
http://localhost:3000
```



### 2. Components

* **StudentTable:** Displays all students in a table with Delete & Edit buttons
* **StudentForm:** Form to add or edit student details



### 3. Navigation

* Add student → navigates to form
* Edit student → pre-fills form with student data
* Delete student → removes student from DB



## Database

* PostgreSQL database `studentdb` stores all student records
* Spring Boot uses **JPA** to persist data
* Data remains even if Spring Boot server stops



## Scripts

### Frontend (React)

* `npm start` → Run dev server
* `npm run build` → Build production files

### Backend (Spring Boot)

* `mvn spring-boot:run` → Run backend
* `mvn clean package` → Build JAR



## Future Improvements

* Add authentication
* Search & filter students
* Pagination for large datasets
* Deploy backend (Heroku/AWS) and frontend (Netlify/GitHub Pages)




