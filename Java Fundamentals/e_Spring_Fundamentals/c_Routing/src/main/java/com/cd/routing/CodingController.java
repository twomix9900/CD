package com.cd.routing;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/coding")
public class CodingController {
    @RequestMapping("")
    public String hello() {
            return "Hello Coding Dojo!";
    }
    
    @RequestMapping("/python") 
    public String python() {
    	 return "Python/Django was awesome!";
    }
    
    @RequestMapping("/java")
    public String java(){
      return "Java/Spring is better!";
    }
    
//    @RequestMapping(value="/howdy", method=RequestMethod.GET)
//    public String greetingHello(){
//      return "Hello world! What route did you use to access me?";
//    }
    
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
}
