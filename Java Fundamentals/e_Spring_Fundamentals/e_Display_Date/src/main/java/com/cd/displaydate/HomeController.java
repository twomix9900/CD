package com.cd.displaydate;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomeController {
	@RequestMapping("/")
	public String home(Model model) {
		return "index.jsp";
	}
	
	@RequestMapping("/date")
	public String date(Model model) {
		Date date = new java.util.Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
		model.addAttribute("date", date);
		return "date.jsp";
	}
	
	@RequestMapping("/time")
	public String time(Model model) {
		Date date = new java.util.Date();
		DateFormat dateFormat = new SimpleDateFormat("HH:mm");
		model.addAttribute("date", dateFormat.format(date));
		return "time.jsp";
	}
	
}

//package com.cd.springdemo;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.RequestMapping;

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
//
//@Controller
//public class HomeController {
//	@RequestMapping("/")
//	public String home(Model model) {
//		model.addAttribute("dojoName", "Burbank");
//		return "index.jsp";
//	}
//}
