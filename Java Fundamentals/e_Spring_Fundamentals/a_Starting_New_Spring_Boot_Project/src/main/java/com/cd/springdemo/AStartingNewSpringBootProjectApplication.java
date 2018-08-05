package com.cd.springdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// 2. Importing dependencies
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RestController
public class AStartingNewSpringBootProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(AStartingNewSpringBootProjectApplication.class, args);
	}

}
