package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

	@Autowired
    private StudentRepository studentRepository;

    @GetMapping("/")
    public List<Student> getAllStudents() {
    	 return studentRepository.findAll();
    }

    @PostMapping("/students")
    public Student addStudent(@RequestBody Student student) {
    	 return studentRepository.save(student);
    }

    @DeleteMapping("/students/byName/{name}")
    public String deleteStudentByName(@PathVariable String name) {
    	 Student student = studentRepository.findByName(name);
         if (student != null) {
             studentRepository.delete(student);
             return "Student deleted successfully";
         }
         return "Student not found";
    }

    @PutMapping("/students/byName/{name}")
    public Student updateStudentByName(@PathVariable String name, @RequestBody Student updatedStudent) {
    	 Student student = studentRepository.findByName(name);
    	 if (student != null) {
             student.setName(updatedStudent.getName());
             student.setAge(updatedStudent.getAge());
             student.setMarks(updatedStudent.getMarks());
             return studentRepository.save(student);
         }
         return null;
    }
}
