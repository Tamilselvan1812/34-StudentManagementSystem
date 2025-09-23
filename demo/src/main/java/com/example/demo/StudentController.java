package com.example.demo;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    private List<Student> students = new ArrayList<>();

    
    @GetMapping("/")
    public List<Student> getAllStudents() {
        return students;
    }

    
    @PostMapping("/students")
    public Student addStudent(@RequestBody Student student) {
        student.setId(students.size() + 1); 
        students.add(student);
        return student;
    } 
    
 
    @DeleteMapping("/students/byName/{name}")
    public String deleteStudentByName(@PathVariable String name) {
        for (Student s : students) {
            if (s.getName().equals(name)) { 
                students.remove(s);
                return "Student deleted successfully";
            }
        }
        return "Student not found";
    }

 
    @PutMapping("/students/byName/{name}")
    public Student updateStudentByName(@PathVariable String name, @RequestBody Student updatedStudent) {
        for (Student s : students) {
            if (s.getName().equals(name)) { 
                s.setName(updatedStudent.getName());
                s.setMarks(updatedStudent.getMarks());       
                return s;                                       
            }
        }
        return null; 
    }



}