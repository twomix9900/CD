package com.cd.strings;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RestController
public class BStringsApplication {

	public static void main(String[] args) {
		SpringApplication.run(BStringsApplication.class, args);
	}
	
    @RequestMapping("/")
    public String index() { // 3
            return "Hello client! How are you doing?";
    } 
    
    @RequestMapping("/random")
    public String random() { // 3
            return "Spring Boot is great! So easy to just respond with strings.";
    }
}
