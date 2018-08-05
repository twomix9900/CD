package com.cd.dojosurvey;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
	@RequestMapping("")
	public String home() {
		return "index.jsp";
	}
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public String home(	
			@RequestParam(value="name") String name, 
			@RequestParam(value="location") String location, 
			@RequestParam(value="language") String language,
			@RequestParam(value="comment") String comment,
			HttpSession session) {
		session.setAttribute("name", name);
		session.setAttribute("location", location);
		session.setAttribute("language", language);
		session.setAttribute("comment", comment);
		return "redirect:/result";
	}
	
	@RequestMapping("/result")
	public String result(HttpSession session, Model model) {
		String name = (String) session.getAttribute("name");
		String location = (String) session.getAttribute("location");
		String language = (String) session.getAttribute("language");
		String comment = (String) session.getAttribute("comment");
		
		
		model.addAttribute("name", name);
		model.addAttribute("location", location);
		model.addAttribute("language", language);
		model.addAttribute("comment", comment);
		
		return "result.jsp";
	}
}

//@RequestMapping(value="/login", method=RequestMethod.POST)
//public String login(@RequestParam(value="username") String username, @RequestParam(value="password") String password) {
//{
//	return "redirect:/dashboard";
//	}






//@RestController
//@RequestMapping("/hello")
//public class HomeController {
//  @RequestMapping("")
//  public String hello() { // 3
//          return "Hello World!?!?!?!?!?!??!";
//  }
//  
//  @RequestMapping("/world") 
//  public String world() {
//  	 return "Class level annotations are cool too";
//  }
//  
//  @RequestMapping(value="/login", method=RequestMethod.POST)
//	public String login(@RequestParam(value="username") String username, @RequestParam(value="password") String password) {
//	{
//		return "redirect:/dashboard";
// 	}
//  
//  @RequestMapping("/goodbye")
//  public String greetingGoodbye(){
//    return "Goodbye world!";
//  }
//  
//  @RequestMapping("/search")
//  public String index(@RequestParam(value="q", required=false) String searchQuery) {
//      if (searchQuery==null) {
//      	return "You searched for nothing";
//      } else {
//      	return "You searched for " + searchQuery;
//      }
//  }
//  
//  @RequestMapping("/pathvariable/{track}/{module}/{lesson}")
//  public String showStuff(@PathVariable("track") String track, @PathVariable("module") String module, @PathVariable("lesson") String lesson) {
//  	return "Track: " + track + " Module: " + module + "Lesson: " + lesson;
//  }

//		@RequestMapping("/createError")
//		public String flashMessages(RedirectAttributes redirectAttributes) {
//			redirectAttributes.addFlashAttribute("error", "A test error!");
//			return "redirect:/";
//		}
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
//  session.setAttribute("count", 0);
//  Integer count = (Integer) session.getAttribute("count");
//}
