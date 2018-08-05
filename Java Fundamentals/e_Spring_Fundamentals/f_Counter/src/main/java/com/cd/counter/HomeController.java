package com.cd.counter;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	@RequestMapping("")
	public String home(Model model, HttpSession session) {
		if (session.getAttribute("counter") == null) {			
			session.setAttribute("counter", 0);
		}
		Integer counter = (Integer) session.getAttribute("counter");
		counter++;
		session.setAttribute("counter", counter);
		return "index.jsp";
	}
	
	@RequestMapping("/counter")
	public String counter(Model model, HttpSession session) {
		if (session.getAttribute("counter") == null) {			
			session.setAttribute("counter", 0);
		}
		Integer counter = (Integer) session.getAttribute("counter");
		model.addAttribute("counter", counter);
		return "counter.jsp";
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

//@Controller
//public class HomeController {
//	@RequestMapping("/")
//	public String home(Model model) {
//		model.addAttribute("dojoName", "Burbank");
//		return "index.jsp";
//	}
//}

//public String index(HttpSession session){
//    session.setAttribute("count", 0);
//    Integer count = (Integer) session.getAttribute("count");
//}
