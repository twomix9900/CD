package com.cd.hellohuman;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@RequestMapping("/")
	public String index(@RequestParam(value="name", required=false) String name) {
	  if (name == null) {
		  return "<h1>Hello Human!</h1><h3>Welcome to SpringBoot!</h3>";
	  } else {
		  return "<h1>Hello " + name + "!</h1><h3>Welcome to SpringBoot!</h3>";
	  }
  }
}


//package com.cd.springdemo;
//
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/hello")
//public class HomeController {
//    @RequestMapping("")
//    public String hello() { // 3
//            return "Hello World!?!?!?!?!?!??!";
//    }
//    
//    @RequestMapping("/world") 
//    public String world() {
//    	 return "Class level annotations are cool too";
//    }
//    
//    @RequestMapping(value="/howdy", method=RequestMethod.GET)
//    public String greetingHello(){
//      return "Hello world! What route did you use to access me?";
//    }
//    
//    @RequestMapping("/goodbye")
//    public String greetingGoodbye(){
//      return "Goodbye world!";
//    }
//    
//    @RequestMapping("/search")
//    public String index(@RequestParam(value="q", required=false) String searchQuery) {
//        if (searchQuery==null) {
//        	return "You searched for nothing";
//        } else {
//        	return "You searched for " + searchQuery;
//        }
//    }
//    
//    @RequestMapping("/pathvariable/{track}/{module}/{lesson}")
//    public String showStuff(@PathVariable("track") String track, @PathVariable("module") String module, @PathVariable("lesson") String lesson) {
//    	return "Track: " + track + " Module: " + module + "Lesson: " + lesson;
//    }
//}
