package com.example.demo;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DemoController {

    
	@GetMapping("/hii")
	
	public List<Students> display()
	{
		List<Students> s1 = new ArrayList<>();
		
		s1.add(new Students(1,"Tamil",85));
		s1.add(new Students(2,"shankar",96));
		s1.add(new Students(3,"sathish",90));
		return s1;
	}
    
    @GetMapping("/bye")
    public String sayBye()
    {
    	return "bye bye";
    }
} 